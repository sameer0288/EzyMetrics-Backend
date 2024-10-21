const express = require('express');
const { fetchCampaigns } = require('../controllers/campaignController');
const { runETLProcess } = require('../services/etlService');
const router = express.Router();

router.get('/fetch', fetchCampaigns);


router.get('/run-etl', async (req, res) => {
    try {
        const metrics = await runETLProcess();
        res.json({ success: true, metrics });
    } catch (err) {
        res.status(500).json({ error: 'ETL process failed', details: err.message });
    }
});

module.exports = router;
