const { sign } = require("jsonwebtoken");
const config = require("../config");

const createAccessToken = user =>
  sign({ user_id: user._id }, config.secrets.jwtRefresh, {
    expiresIn: config.secrets.jwtExpAccess
  });

const createRefreshToken = user =>
  sign(
    { user_id: user._id, token_version: user.token_version },
    config.secrets.jwtRefresh,
    {
      expiresIn: config.secrets.jwtExpRefresh
    }
  );

module.exports = {
  createAccessToken,
  createRefreshToken
};
