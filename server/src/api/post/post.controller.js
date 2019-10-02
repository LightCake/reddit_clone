const Post = require("./post.model");
const Sub = require("../sub/sub.model");

const create = async (req, res) => {
  const { title, text, sub_id } = req.body;
  try {
    // Check whether the sub exist.
    if (!(await Sub.exists({ _id: sub_id }))) {
      return res.status(422).end();
    }
    const data = { title, text, user: req.user._id, sub: sub_id };
    const post = await Post.create(data);
    res.status(201).send(post);
  } catch (e) {
    console.error(e);
    res.status(400).end();
  }
};

module.exports = {
  create
};
