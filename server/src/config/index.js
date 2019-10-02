const mergeDeep = require("../utils/mergeDeep");

// Specifies the environment in which the application is running.
const env = process.env.NODE_ENV || "development";

const baseConfig = {
  env,
  port: 5000,
  secrets: {
    jwtRefresh: process.env.JWT_SECRET_REFRESH,
    jwtExpRefresh: 60 * 60 * 24 * 7,
    jwtAccess: process.env.JWT_SECRET_ACCESS,
    jwtExpAccess: "15m"
  }
};

let envConfig = {};

switch (env) {
  case "development":
    envConfig = require("./dev");
    break;
  case "testing":
    envConfig = require("./testing");
    break;
  default:
    envConfig = require("./dev");
}

module.exports = mergeDeep(baseConfig, envConfig);
