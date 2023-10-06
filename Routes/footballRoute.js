const express = require("express");
const router = express.Router();
const footballController = require('../Controllers/footballController');

router.get('',footballController.getScores);

module.exports = router; 