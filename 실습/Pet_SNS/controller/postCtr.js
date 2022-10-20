const Post = require("../model/post");

const formatDate = (date) => {
  let d = new Date(date);
  let month = "" + (d.getMonth() + 1);
  let day = "" + d.getDate();
  let year = d.getFullYear();
  if (month.length < 2) {
    month = "0" + month;
  }
  if (day.length < 2) {
    day = "0" + month;
  }
  return [year, month, day].join("-");
};

const postCtr = {
  upload: async (req, res) => {
    const { title, content } = req.body;
    const image = req.file;

    console.log(image);
    const publishedDate = formatDate(new Date());
    const post = new Post({
      title: title,
      content: content,
      image: `images/${image.originalname}`,
      publishedDate: publishedDate,
      user: req.userInfo,
    });

    console.log(post);

    try {
      await post.save();
      res.redirect("/");
    } catch (error) {
      res.status(500).send("upload error!!");
    }
  },
  list: async (req, res) => {
    const posts = await Post.find({});
    res.render("index", { postList: posts });
  },
  detail: async (req, res) => {
    const { id } = req.params;
    const post = await Post.findById(id);
    res.render("detail", { post: post });
  },
  updateLayout: async (req, res) => {
    const { id } = req.params;
    const post = await Post.findById(id);
    res.render("update", { post: post });
  },
  update: async (req, res) => {
    const { id } = req.params;
    const { title, content } = req.body;
    try {
      await Post.findByIdAndUpdate(
        id,
        { title: title, content: content },
        { new: true }
      );
      res.redirect("/");
    } catch (error) {
      res.status(500).send("update error!!");
    }
  },
  delete: async (req, res) => {
    const { id } = req.params;
    try {
      await Post.findByIdAndDelete(id);
      res.redirect("/");
    } catch (error) {
      res.status(500).send("delete error!!");
    }
  },
  like: async (req, res) => {
    const { id } = req.params;
    const post = await Post.findById(id);
    const check = post.likeUser.some((userId) => {
      return userId === req.userInfo._id;
    });
    if (check) {
      post.likeCount -= 1;
      const idx = post.likeUser.indexOf(req.userInfo._id);
      if (idx > -1) {
        post.likeUser.splice(idx, 1);
      }
    } else {
      post.likeCount += 1;
      post.likeUser.push(req.userInfo._id);
    }
    const result = await post.save();
    res.status(200).json({
      check: check,
      post: result,
    });
  },
  comment: async (req, res) => {
    const { id } = req.params;
    const post = await Post.findById(id);
    const user = req.userInfo;
    const { comment } = req.body;
    const commnetWrap = {
      comment: comment,
      user: user,
    };

    post.comment.push(commnetWrap);
    const result = await post.save();
    res.status(200).json({ post: result });
  },
};

module.exports = postCtr;
