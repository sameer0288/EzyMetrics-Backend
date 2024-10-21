const Lead = require('../models/leadModel');
const Campaign = require('../models/campaignModel');
const emailService = require('./emailService');

// Example ETL Process
exports.runETLProcess = async () => {
    try {
        // Step 1: Extract data from Leads and Campaigns (from the database)
        const leads = await Lead.find({});
        const campaigns = await Campaign.find({});

        // Step 2: Transform the data into meaningful metrics
        const metrics = transformData(leads, campaigns);

        // Step 3: Save transformed data or perform further processing
        // Optionally, you could save the metrics into a new collection, log them, or trigger other actions
        console.log("Metrics generated: ", metrics);

        // Step 4: Check if metrics meet certain criteria to trigger alerts
        checkAlerts(metrics);

        return metrics;
    } catch (err) {
        console.error("Error running ETL process:", err);
        throw err;
    }
};

// Function to transform data into meaningful metrics
const transformData = (leads, campaigns) => {
    let totalLeads = leads.length;
    let totalCampaigns = campaigns.length;
    let convertedLeads = leads.filter(lead => lead.converted).length;
    let conversionRate = totalLeads > 0 ? (convertedLeads / totalLeads) * 100 : 0;

    return {
        totalLeads,
        convertedLeads,
        conversionRate,
        totalCampaigns
    };
};

// Function to check certain conditions and trigger email alerts
const checkAlerts = (metrics) => {
    if (metrics.conversionRate > 50) {
        // Trigger an email alert if the conversion rate is greater than 50%
        const subject = "High Conversion Rate Alert!";
        const message = `The current conversion rate is ${metrics.conversionRate}%, which exceeds the threshold of 50%.`;
        emailService.sendAlertEmail('admin@ezymetrics.com', subject, message);
    }

    if (metrics.totalLeads < 10) {
        // Trigger an email alert if the total number of leads is below a threshold
        const subject = "Low Lead Volume Alert!";
        const message = `The total number of leads is ${metrics.totalLeads}, which is below the acceptable threshold.`;
        emailService.sendAlertEmail('admin@ezymetrics.com', subject, message);
    }
};
