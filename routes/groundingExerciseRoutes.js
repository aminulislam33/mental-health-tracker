const express = require('express');
const { verifyToken } = require('../middleware/authMiddleware');
const { RetrieveAllGroundingExercises, RetrieveGroundingExercisesByType } = require('../controllers/groundingExerciseController');
const router = express.Router();

router.get('/', verifyToken, RetrieveAllGroundingExercises);
router.get('/:type', verifyToken, RetrieveGroundingExercisesByType);

module.exports = router;