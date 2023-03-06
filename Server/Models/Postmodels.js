const mongoose = require("mongoose");

const postSchema = mongoose.Schema(
  {
    userId: { type: mongoose.ObjectId, required: true },
    desc: {type:Object},
    likes: [],
    image:{type:Object},
  },
  {
    timestamps: true,
  }
);

const PostModel = mongoose.model("Posts", postSchema);

module.exports = PostModel;

