const express = require('express');
const { NewRource, RetrieveResources, RetrieveResourcesByType } = require('../controllers/resourceController');
const router = express.Router();

router.post('/', NewRource);
router.get('/', RetrieveResources);
router.get('//:type', RetrieveResourcesByType);

module.exports = router;