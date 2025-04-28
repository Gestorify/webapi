const express = require('express');
const router = express.Router();
const { echo } = require('../controllers/echoController');

router.post('/', echo);

module.exports = router;
