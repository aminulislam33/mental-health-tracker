const express = require('express');
const { verifyToken } = require('../middleware/authMiddleware');
const { NewPeerSupportGroup, JoinPeerSupportGroup, RetriveAllSupportGroups } = require('../controllers/peerSupportGroupController');
const router = express.Router();

router.post('/', verifyToken, NewPeerSupportGroup);
router.post('/:groupId/join', verifyToken, JoinPeerSupportGroup);
router.get('/', verifyToken, RetriveAllSupportGroups);

module.exports = router;