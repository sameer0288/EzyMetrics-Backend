const Lead = require('../models/leadModel');
const json2csv = require('json2csv').parse;
const PDFDocument = require('pdfkit');
const fs = require('fs');

// Generate CSV Report
exports.generateCSVReport = async (req, res) => {
    try {
        const leads = await Lead.find({});
        const csv = json2csv(leads);
        
        res.header('Content-Type', 'text/csv');
        res.attachment('leads_report.csv');
        res.send(csv);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Generate PDF Report
exports.generatePDFReport = async (req, res) => {
    try {
        const leads = await Lead.find({});
        const doc = new PDFDocument();
        doc.pipe(fs.createWriteStream('leads_report.pdf'));

        leads.forEach(lead => {
            doc.text(`Name: ${lead.name}, Email: ${lead.email}, Converted: ${lead.converted}`);
        });

        doc.end();
        res.download('leads_report.pdf');
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
