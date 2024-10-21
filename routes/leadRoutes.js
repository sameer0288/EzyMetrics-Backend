const express = require('express');
const { fetchLeads } = require('../controllers/leadController');
const router = express.Router();

router.get('/fetch', fetchLeads);

module.exports = router;
