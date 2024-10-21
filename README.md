# EzyMetrics Backend API

## Overview
This project is the backend service for EzyMetrics, focusing on data integrations with dummy CRM and marketing platforms, data storage and transformation, and reporting. It supports fetching leads and campaigns data, processing the data into meaningful metrics, and generating reports in various formats.

## Features
- **API Service Development**: 
  - Integrates with dummy CRM and marketing platforms.
  - Fetches lead and campaign data via dummy data simulation.
  
- **Data Storage**: 
  - Stores lead and campaign data in a MongoDB database.

- **ETL Process**: 
  - Extracts, transforms, and loads (ETL) data for reporting purposes.
  - Calculates metrics like total leads, converted leads, and conversion rates.

- **Reporting**: 
  - Generates reports in CSV format.
  - Sends email alerts based on specific conditions (e.g., high conversion rates or low lead volume).

## Prerequisites
To run this project locally, you'll need:
- **Node.js** (v14 or higher)
- **MongoDB** (Local or Cloud instance)
- **Nodemailer** (Email service configuration)
- **Git**

## Installation
1. Clone the repository:

```bash
git clone https://github.com/sameer0288/EzyMetrics-Backend.git

```

Navigate to the project directory:

cd EzyMetrics-Backend

### Install dependencies:

npm install

Create a .env file in the project root and add the following environment variables:

### env

PORT=5000
MONGO_URI=mongodb://localhost:27017/ezymetrics
EMAIL_HOST=smtp.your-email-provider.com
EMAIL_PORT=587
EMAIL_USER=your-email@example.com
EMAIL_PASS=your-email-password
Replace your-email-provider.com, your-email@example.com, and your-email-password with your actual email configuration for email alerts.

## Start the development server:

npm start

The server should be running on http://localhost:5000.

### API Endpoints

1. Fetch Campaign Data
URL: /api/campaigns
Method: GET
Description: Fetches dummy campaign data from the database.
Example Response:


[
    {
        "_id": "603f2e8f7c4e8a1e3c34b3c1",
        "name": "Campaign 1",
        "budget": 5000,
        "leadsGenerated": 150,
        "createdAt": "2023-10-18T12:00:00Z"
    },
    {
        "_id": "603f2e8f7c4e8a1e3c34b3c2",
        "name": "Campaign 2",
        "budget": 7000,
        "leadsGenerated": 200,
        "createdAt": "2023-10-19T12:00:00Z"
    }
]


2. Fetch Lead Data
URL: /api/leads
Method: GET
Description: Fetches dummy lead data from the database.
Example Response:

[
    {
        "_id": "603f2e8f7c4e8a1e3c34b3c5",
        "name": "Lead 1",
        "email": "lead1@example.com",
        "converted": true,
        "createdAt": "2023-10-18T12:00:00Z"
    },
    {
        "_id": "603f2e8f7c4e8a1e3c34b3c6",
        "name": "Lead 2",
        "email": "lead2@example.com",
        "converted": false,
        "createdAt": "2023-10-19T12:00:00Z"
    }
]


3. Run ETL Process
URL: /api/etl
Method: GET
Description: Runs the ETL process to generate metrics based on the current lead and campaign data.
Example Response:

{
    "success": true,
    "metrics": {
        "totalLeads": 50,
        "convertedLeads": 25,
        "conversionRate": 50,
        "totalCampaigns": 5
    }
}


4. Generate Reports
URL: /api/reports/download
Method: GET
Description: Generates a CSV report based on the latest data.
Example Response:
A downloadable CSV file.


5. Trigger Email Alerts
Email alerts are automatically sent when specific conditions are met during the ETL process:
High conversion rate: If the conversion rate exceeds 50%, an alert email is sent.
Low lead volume: If the total number of leads is below 10, an alert email is sent.
How to Use
Fetching Data: Use the endpoints /api/leads and /api/campaigns to fetch leads and campaigns data.
Running ETL: Call /api/etl to process the data and generate metrics.
Generating Reports: Hit /api/reports/download to generate and download reports.
Email Alerts: Configure email settings in the .env file to receive alerts for conversion rates and lead volumes.


Project Structure

├── controllers
│   ├── leadController.js     # Handles lead-related operations
│   ├── campaignController.js  # Handles campaign-related operations
├── models
│   ├── leadModel.js          # Lead Mongoose model
│   ├── campaignModel.js      # Campaign Mongoose model
├── routes
│   ├── leadRoutes.js         # Lead-related routes
│   ├── campaignRoutes.js     # Campaign-related routes
│   ├── etlRoutes.js          # ETL and reporting routes
├── services
│   ├── etlService.js         # ETL process logic
│   ├── emailService.js       # Email alert service
├── .env                      # Environment variables
├── app.js                    # Main application file
└── README.md                 # API documentation

## Testing
To test the API, you can use tools like:

Postman: To manually test API requests.
cURL: For command-line API testing.
For example, to test the ETL process using curl:


curl -X GET http://localhost:5000/api/etl
License
This project is licensed under the MIT License.

Conclusion
This backend service integrates data from CRM and marketing platforms, processes it to generate meaningful insights, and offers reporting and alert features. Feel free to explore and enhance the project as per your requirements.

This README provides detailed instructions on how to set up, run, and use the API along with its key features and functionality.
