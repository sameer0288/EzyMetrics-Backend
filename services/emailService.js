const nodemailer = require('nodemailer');

exports.sendAlertEmail = async (email, subject, message) => {
    try {
        let transporter = nodemailer.createTransport({
            host: process.env.EMAIL_HOST,
            port: process.env.EMAIL_PORT,
            secure: false,
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        await transporter.sendMail({
            from: `"EzyMetrics" <${process.env.EMAIL_USER}>`,
            to: email,
            subject: subject,
            text: message,
        });

        console.log("Email sent successfully");
    } catch (err) {
        console.error("Error sending email", err);
    }
};
