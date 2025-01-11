const ForumPost = require("../models/ForumPost");

const NewForumPost = async (req, res) => {
    const { title, content } = req.body;
    const userId = req.user.id;  // Assuming the user is authenticated via middleware

    try {
        const newPost = new ForumPost({
            userId,
            title,
            content
        });

        const savedPost = await newPost.save();
        res.status(201).json(savedPost);  // Return the created post
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

const ReplyToForumPost = async (req, res) => {
    const { content } = req.body;
    const { postId } = req.params;
    const userId = req.user.id;  // Assuming the user is authenticated via middleware

    try {
        const post = await ForumPost.findById(postId);

        post.replies.push({ userId, content });

        const updatedPost = await post.save();
        res.status(200).json(updatedPost);  // Return the updated post with the new reply
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

const RetriveAllForumPosts = async (req, res) => {
    try {
        const posts = await ForumPost.find().sort({ createdAt: -1 });  // Latest posts first
        res.status(200).json(posts);  // Return posts
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}

module.exports = {
    NewForumPost,
    ReplyToForumPost,
    RetriveAllForumPosts,
}