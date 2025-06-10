import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import nodemailer from 'nodemailer';
import bodyParser from 'body-parser';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

// Get the directory name of the current module
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Load environment variables from .env file in the server directory
dotenv.config({ path: join(__dirname, '.env') });

// Log environment variables (without sensitive data)
console.log('Environment loaded:', {
  host: process.env.ZOHO_HOST,
  port: process.env.ZOHO_PORT,
  user: process.env.ZOHO_USER ? 'Set' : 'Not Set',
  adminEmail: process.env.ADMIN_EMAIL ? 'Set' : 'Not Set'
});

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Configure Nodemailer with Zoho SMTP
const transporter = nodemailer.createTransport({
  host: process.env.ZOHO_HOST,
  port: process.env.ZOHO_PORT,
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.ZOHO_USER,
    pass: process.env.ZOHO_PASS,
  },
  tls: {
    rejectUnauthorized: false // For local development only, remove in production with valid SSL
  }
});

// Test the SMTP connection
transporter.verify((error) => {
  if (error) {
    console.error('SMTP Connection Error:', error);
    console.error('Please check your Zoho SMTP configuration in .env file');
  } else {
    console.log('SMTP Connection successful! Server is ready to send emails.');
  }
});

// Email template for admin notification
const createAdminEmailTemplate = (data) => `
  <div style="font-family: Arial, sans-serif; line-height: 1.6; max-width: 600px; margin: 0 auto; color: #333;">
    <div style="background-color: #ef4444; padding: 20px; text-align: center; border-radius: 8px 8px 0 0;">
      <h1 style="color: white; margin: 0;">New Contact Form Submission</h1>
    </div>
    <div style="padding: 20px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 8px 8px;">
      <p>You have received a new message from your website contact form:</p>
      
      <div style="background-color: #f9fafb; padding: 15px; border-radius: 6px; margin: 15px 0;">
        <p><strong>Name:</strong> ${data.firstName} ${data.lastName}</p>
        <p><strong>Email:</strong> <a href="mailto:${data.email}">${data.email}</a></p>
        <p><strong>Phone:</strong> ${data.phone || 'Not provided'}</p>
        <p><strong>Study Interest:</strong> ${data.interest || 'Not specified'}</p>
        <p><strong>Message:</strong></p>
        <div style="background-color: white; padding: 10px; border: 1px solid #e5e7eb; border-radius: 4px; margin-top: 5px;">
          <p style="white-space: pre-line; margin: 0;">${data.message}</p>
        </div>
      </div>
      
      <p style="margin-top: 20px; font-size: 0.9em; color: #6b7280;">
        This message was sent from the contact form on ${process.env.COMPANY_WEBSITE}.
      </p>
    </div>
    <div style="text-align: center; margin-top: 20px; color: #9ca3af; font-size: 0.8em;">
      <p>© ${new Date().getFullYear()} ${process.env.COMPANY_NAME}. All rights reserved.</p>
    </div>
  </div>
`;

// Email template for auto-reply
const createAutoReplyTemplate = (firstName) => `
  <div style="font-family: Arial, sans-serif; line-height: 1.6; max-width: 600px; margin: 0 auto; color: #333;">
    <div style="background-color: #ef4444; padding: 20px; text-align: center; border-radius: 8px 8px 0 0;">
      <h1 style="color: white; margin: 0;">Thank You for Contacting Iroha Consultancy</h1>
    </div>
    <div style="padding: 20px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 8px 8px;">
      <p>Dear ${firstName},</p>
      
      <p>Thank you for reaching out to Iroha Consultancy. We have received your message and our team will get back to you within 24 hours.</p>
      
      <p>Here's a summary of your submission:</p>
      <div style="background-color: #f9fafb; padding: 15px; border-radius: 6px; margin: 15px 0;">
        <p><strong>Date:</strong> ${new Date().toLocaleString()}</p>
        <p><strong>Office Hours:</strong> Sunday - Friday: 6:00 AM - 6:00 PM</p>
      </div>
      
      <p>If you have any urgent inquiries, please don't hesitate to contact us directly at:</p>
      <ul style="list-style: none; padding: 0;">
        <li>📞 Phone: +977-9840175421</li>
        <li>📧 Email: <a href="mailto:${process.env.ADMIN_EMAIL}">${process.env.ADMIN_EMAIL}</a></li>
        <li>📍 Address: Dillibazar, Kathmandu, Nepal</li>
      </ul>
      
      <p>Best regards,<br>The Iroha Consultancy Team</p>
    </div>
    <div style="text-align: center; margin-top: 20px; color: #9ca3af; font-size: 0.8em;">
      <p>© ${new Date().getFullYear()} Iroha Consultancy. All rights reserved.</p>
    </div>
  </div>
`;

// API endpoint to handle contact form submission
app.post('/api/contact', async (req, res) => {
  try {
    const { firstName, lastName, email, phone, interest, message } = req.body;

    // Log the incoming request
    console.log('Received contact form submission:', { firstName, lastName, email, phone, interest });

    // Validate required fields
    if (!firstName || !lastName || !email || !message) {
      console.log('Validation failed: Missing required fields');
      return res.status(400).json({ 
        success: false, 
        message: 'Please fill in all required fields' 
      });
    }

    // Check if environment variables are set
    if (!process.env.ZOHO_USER || !process.env.ZOHO_PASS || !process.env.ADMIN_EMAIL) {
      console.error('Missing required environment variables');
      return res.status(500).json({
        success: false,
        message: 'Server configuration error. Please contact the administrator.'
      });
    }

    // Email options for admin notification
    const mailOptions = {
      from: `"Iroha Consultancy" <${process.env.ZOHO_USER}>`,
      to: process.env.ADMIN_EMAIL,
      subject: `New Contact Form Submission from ${firstName} ${lastName}`,
      html: createAdminEmailTemplate({ firstName, lastName, email, phone, interest, message })
    };

    // Email options for auto-reply
    const autoReplyOptions = {
      from: `"Iroha Consultancy" <${process.env.ZOHO_USER}>`,
      to: email,
      subject: `Thank you for contacting Iroha Consultancy`,
      html: createAutoReplyTemplate(firstName)
    };

    console.log('Attempting to send emails...');

    // Send both emails
    const [adminResult, autoReplyResult] = await Promise.all([
      transporter.sendMail(mailOptions),
      transporter.sendMail(autoReplyOptions)
    ]);

    console.log('Emails sent successfully:', {
      adminEmail: adminResult.messageId,
      autoReply: autoReplyResult.messageId
    });

    res.status(200).json({ 
      success: true, 
      message: 'Your message has been sent successfully!' 
    });
  } catch (error) {
    console.error('Error sending email:', error);
    console.error('Error details:', {
      message: error.message,
      code: error.code,
      command: error.command
    });
    res.status(500).json({ 
      success: false, 
      message: 'Failed to send message. Please try again later.' 
    });
  }
});

// Basic route for testing
app.get('/', (req, res) => {
  res.send('Iroha Consultancy Mail Server is running');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});