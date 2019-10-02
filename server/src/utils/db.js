const mongoose = require("mongoose");
const config = require("../config");

const connect = (url = config.dbUrl, options = {}) => {
  mongoose.set("useCreateIndex", true);

  mongoose.connect(url, {
    ...options,
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
};
module.exports = connect;
