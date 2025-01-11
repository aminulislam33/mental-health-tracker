const express = require("express");
const { createMoodLog, getUserMoodLogs } = require("../controllers/moodLogController");
const { verifyToken } = require("../middleware/authMiddleware");
const router = express.Router();

router.post("/", verifyToken, createMoodLog);
router.get("/", verifyToken, getUserMoodLogs);

module.exports = router;