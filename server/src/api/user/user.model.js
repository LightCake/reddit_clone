const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      trim: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true
    },
    password: {
      type: String,
      required: true
    },
    token_version: {
      type: Number,
      default: 0
    }
  },
  { timestamps: true }
);

// MIDDLEWARE
userSchema.pre("save", function(next) {
  // If the password field is not modified, go to the next middleware.
  if (!this.isModified("password")) {
    return next();
  }
  // Hash the new password.
  bcrypt.hash(this.password, 10, (err, hash) => {
    if (err) return next(err);

    this.password = hash;
    next();
  });
});

userSchema.methods.checkPassword = function(password) {
  const passwordHash = this.password;
  return new Promise((resolve, reject) => {
    bcrypt.compare(password, passwordHash, (err, same) => {
      if (err) return reject(err);

      resolve(same);
    });
  });
};

module.exports = mongoose.model("user", userSchema);
