const express = require("express");
const { verifyToken } = require("../middleware/authMiddleware");
const { createSymptomLog, getUserSymptomLogs } = require("../controllers/symptomLogController");
const router = express.Router();

router.post("/", verifyToken, createSymptomLog);
router.get("/", verifyToken, getUserSymptomLogs);

module.exports = router;