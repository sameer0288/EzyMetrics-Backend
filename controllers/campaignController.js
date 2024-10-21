const Campaign = require('../models/campaignModel');
const axios = require('axios');

// Simulate fetching campaigns from a dummy API
exports.fetchCampaigns = async (req, res) => {
    try {
        const dummyData = [
            { name: "Campaign 1", budget: 1000, leadsGenerated: 100 },
            { name: "Campaign 2", budget: 2000, leadsGenerated: 150 }
        ];

        const campaigns = await Campaign.insertMany(dummyData);
        res.json(campaigns);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
