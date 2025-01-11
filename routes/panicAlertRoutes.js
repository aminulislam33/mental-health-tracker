const express = require('express');
const { verifyToken } = require('../middleware/authMiddleware');
const { TriggerPanicAlert } = require('../controllers/panicAlertController');
const router = express.Router();

router.post('/panic-alert', verifyToken, TriggerPanicAlert);

module.exports = router;