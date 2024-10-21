const express = require('express');
const { generateCSVReport, generatePDFReport } = require('../controllers/reportController');
const router = express.Router();

router.get('/csv', generateCSVReport);
router.get('/pdf', generatePDFReport);

module.exports = router;
