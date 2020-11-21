const express = require('express');
const router = express.Router();
const package = require('../package.json');

router.get('/', (req, res) => res.json({ "Node API": package.version }));

module.exports = router;