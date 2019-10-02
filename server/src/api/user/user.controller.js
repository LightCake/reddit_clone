const { verify } = require("jsonwebtoken");
const User = require("./user.model");
const { createAccessToken, createRefreshToken } = require("../../utils/auth");
const config = require("../../config");

// SIGNUP
const signup = async (req, res) => {
  const { name, email, password } = req.body;
  let errors = {};

  // Checks whether the name is already taken.
  if (await User.exists({ name })) {
    errors.name = "Username is already taken";
  }
  // Checks whether the email address is already in use.
  if (await User.exists({ email })) {
    errors.email = "Email address is already in use";
  }
  // If either the name is already taken or the email address is already in use, then send the errors back to the client.
  if (Object.keys(errors).length > 0) {
    return res.status(400).send(errors);
  } else {
    try {
      const data = { name, email, password };
      // Creates a new user in the database.
      const user = await User.create(data);
      // The request has been fulfilled and has resulted in one new resource being created.
      return res.status(201).send(user);
    } catch (e) {
      return res.status(500).end();
    }
  }
};

//SIGNIN
const signin = async (req, res) => {
  const { name, password } = req.body;

  // Check whether the user exists.
  const user = await User.findOne({ name });

  if (user) {
    // Check whether the passwords match.
    const match = await user.checkPassword(password);
    // If the passwords match return JWT
    if (match) {
      res.cookie("jid", createRefreshToken(user), {
        httpOnly: true,
        expires: new Date(Date.now() + config.secrets.jwtExpRefresh * 1000)
      });

      const data = {
        accessToken: createAccessToken(user)
      };

      return res.status(201).send(data);
    } else {
      return res.status(401).send({ password: "Invalid password" });
    }
  } else {
    return res.status(401).send({ name: "Invalid name" });
  }
};

// REFRESH ACCESS TOKEN
const refresh_token = async (req, res) => {
  // HELPER FUNCTION
  const send_response = (ok, access_token) => res.send({ ok, access_token });

  const token = req.cookies.jid;
  // If no refresh token was found return an empty string as access token.
  if (!token) {
    return send_response(false, "");
  }

  let payload;
  try {
    // Verify the token was created with the same secret.
    payload = verify(token, config.secrets.jwtRefresh);
  } catch (e) {
    console.error(e);
    return send_response(false, "");
  }

  // Refresh token is valid and we can send back a new access token.

  // Find the user
  const user = await User.findById(payload.user_id);
  // If the user was not found, return an empty string as access token.
  if (!user) {
    return send_response(false, "");
  }
  // Compare token version saved in the database with the payload one.
  if (user.token_version !== payload.token_version) {
    return send_response(false, "");
  }
  // Passed all checks. At this point, send back an access token.
  return send_response(true, createAccessToken(user));
};

// REVOKE REFRESH TOKEN
const revoke_refresh_token = async (req, res) => {
  const { user_id } = req.body;

  await User.findOneAndUpdate(
    { _id: user_id },
    { $inc: { token_version: 1 } }
  ).exec();

  res.send(true);
};

module.exports = {
  signup,
  signin,
  refresh_token,
  revoke_refresh_token
};
