const express = require('express');
const router = express.Router();
const echoRoutes = require('./echo');

// Rotas de echo
router.use('/echo', echoRoutes);

module.exports = router;
