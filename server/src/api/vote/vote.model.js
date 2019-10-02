const mongoose = require("mongoose");

const voteSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "user",
      required: true
    },
    value: {
      type: Number,
      required: true,
      enum: [-1, 1]
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("vote", voteSchema);
