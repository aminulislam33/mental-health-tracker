const express = require('express');
const router = express.Router();
const { verifyToken } = require('../middleware/authMiddleware');
const { GenerateFeedback, GetFeedback } = require('../controllers/feedbackController');

router.post('/', verifyToken, GenerateFeedback);
router.get('/', verifyToken, GetFeedback);

module.exports = router;