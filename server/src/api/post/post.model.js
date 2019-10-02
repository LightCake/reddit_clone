const mongoose = require("mongoose");

// Character limit 40.000 for post, 10.000 for comment
const postSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      maxlength: 300
    },
    text: {
      type: String,
      trim: true,
      maxlength: 40000
    },
    votes: [{ type: mongoose.SchemaTypes.ObjectId, ref: "vote" }],
    user: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "user",
      required: true
    },
    sub: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "sub",
      required: true
    },
    deleted: {
      type: Boolean,
      default: false
    }
  },
  { timestamps: true }
);

postSchema.index({ user: 1, title: 1 }, { unique: true });

module.exports = mongoose.model("post", postSchema);
