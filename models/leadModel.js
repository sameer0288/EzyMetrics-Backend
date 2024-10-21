const mongoose = require('mongoose');

const leadSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: String,
    campaignId: String,
    converted: Boolean,
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('Lead', leadSchema);
