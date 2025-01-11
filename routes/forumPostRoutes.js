const express = require('express');
const { verifyToken } = require('../middleware/authMiddleware');
const { NewForumPost, ReplyToForumPost, RetriveAllForumPosts } = require('../controllers/forumPostController');
const router = express.Router();

router.post('/', verifyToken, NewForumPost);
router.post('/:postId/reply', ReplyToForumPost);
router.get('/', verifyToken, RetriveAllForumPosts);

module.exports = router;