const Lead = require('../models/leadModel');
const axios = require('axios');

// Simulate fetching leads from a dummy API
exports.fetchLeads = async (req, res) => {
    try {
        const dummyData = [
            { name: "John Doe", email: "john@example.com", phone: "123456789", campaignId: "1", converted: false },
            { name: "Jane Doe", email: "jane@example.com", phone: "987654321", campaignId: "2", converted: true }
        ];
        
        const leads = await Lead.insertMany(dummyData);
        res.json(leads);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
