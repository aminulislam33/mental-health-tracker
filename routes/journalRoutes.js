const express = require('express');
const { verifyToken } = require('../middleware/authMiddleware');
const { JournalEntry } = require('../controllers/journalController');
const router = express.Router();

router.post("/", verifyToken, JournalEntry);

module.exports = router;