const { verify } = require("jsonwebtoken");
const config = require("../config");

export const protect = async (req, res, next) => {
  const authorization = req.headers.authorization;

  if (!authorization) {
    return res.status(401).end();
  }
  let payload;
  try {
    const token = authorization.split(" ")[1].trim();
    payload = await verify(token, config.secrets.jwtAccess);
  } catch (e) {
    return res.status(401).end();
  }

  const user = await user
    .findById(payload.userId)
    .select("-password")
    .lean()
    .exec();

  if (!user) return res.status(401).end();

  req.user = user;
  next();
};
