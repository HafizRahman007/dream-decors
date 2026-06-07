import express from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Resolve paths to database files
let DATA_FILE = path.join(__dirname, '..', 'data', 'consultations.json');
let OUTBOX_FILE = path.join(__dirname, '..', 'data', 'gmail_outbox.json');

// Vercel serverless functions have a read-only filesystem except for /tmp
if (process.env.VERCEL) {
  DATA_FILE = path.join('/tmp', 'consultations.json');
  OUTBOX_FILE = path.join('/tmp', 'gmail_outbox.json');
}

const GMAIL_USER = process.env.GMAIL_USER;
const GMAIL_PASS = process.env.GMAIL_PASS;
const RECEIVER_EMAIL = process.env.RECEIVER_EMAIL || 'dreamdecorsuae@gmail.com';

// Ensure data folder exists
const dataDir = path.dirname(DATA_FILE);
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

// Ensure consultations.json exists
if (!fs.existsSync(DATA_FILE)) {
  fs.writeFileSync(DATA_FILE, JSON.stringify([], null, 2), 'utf-8');
}

// Ensure gmail_outbox.json exists
if (!fs.existsSync(OUTBOX_FILE)) {
  fs.writeFileSync(OUTBOX_FILE, JSON.stringify([], null, 2), 'utf-8');
}

// Middlewares
app.use(express.json());

// Serve static files from public directory when running locally
app.use(express.static(path.join(__dirname, '..', 'public')));

// Email delivery pipeline
async function sendEmailNotification(inquiry) {
  const mailSubject = `🌹 New Dream Decors Inquiry: ${inquiry.name}`;
  const mailHTML = `
    <div style="font-family: 'Playfair Display', Georgia, serif; max-width: 600px; margin: 0 auto; border: 1px solid #E8A0A2; padding: 2.5rem; border-radius: 12px; background-color: #FAF6F0; color: #1E1710;">
      <div style="text-align: center; margin-bottom: 2rem;">
        <h2 style="color: #C58940; font-weight: normal; margin-bottom: 0.25rem;">Dream Decors UAE</h2>
        <span style="font-size: 0.75rem; letter-spacing: 0.15em; text-transform: uppercase; color: #7A726A;">Bespoke Event Curations</span>
      </div>
      <hr style="border: 0; border-top: 1px solid rgba(197, 137, 64, 0.15); margin-bottom: 2rem;" />
      
      <p style="font-size: 1.05rem; line-height: 1.6; color: #5C554E;">You have received a new consultation inquiry from your website portfolio:</p>
      
      <table style="width: 100%; border-collapse: collapse; margin-top: 1.5rem; margin-bottom: 2rem;">
        <tr>
          <td style="padding: 0.75rem 0; border-bottom: 1px solid rgba(197, 137, 64, 0.08); font-weight: bold; color: #7A726A; width: 180px;">Client Name:</td>
          <td style="padding: 0.75rem 0; border-bottom: 1px solid rgba(197, 137, 64, 0.08);">${inquiry.name}</td>
        </tr>
        <tr>
          <td style="padding: 0.75rem 0; border-bottom: 1px solid rgba(197, 137, 64, 0.08); font-weight: bold; color: #7A726A;">Partner Name:</td>
          <td style="padding: 0.75rem 0; border-bottom: 1px solid rgba(197, 137, 64, 0.08);">${inquiry.partner || 'N/A'}</td>
        </tr>
        <tr>
          <td style="padding: 0.75rem 0; border-bottom: 1px solid rgba(197, 137, 64, 0.08); font-weight: bold; color: #7A726A;">Event Date:</td>
          <td style="padding: 0.75rem 0; border-bottom: 1px solid rgba(197, 137, 64, 0.08);">${inquiry.date}</td>
        </tr>
        <tr>
          <td style="padding: 0.75rem 0; border-bottom: 1px solid rgba(197, 137, 64, 0.08); font-weight: bold; color: #7A726A;">Venue:</td>
          <td style="padding: 0.75rem 0; border-bottom: 1px solid rgba(197, 137, 64, 0.08);">${inquiry.venue}</td>
        </tr>
        <tr>
          <td style="padding: 0.75rem 0; border-bottom: 1px solid rgba(197, 137, 64, 0.08); font-weight: bold; color: #7A726A;">Guest Scale:</td>
          <td style="padding: 0.75rem 0; border-bottom: 1px solid rgba(197, 137, 64, 0.08);">${inquiry.scale}</td>
        </tr>
        <tr>
          <td style="padding: 0.75rem 0; border-bottom: 1px solid rgba(197, 137, 64, 0.08); font-weight: bold; color: #7A726A;">Style Preference:</td>
          <td style="padding: 0.75rem 0; border-bottom: 1px solid rgba(197, 137, 64, 0.08);">${inquiry.styling}</td>
        </tr>
        <tr>
          <td style="padding: 0.75rem 0; border-bottom: 1px solid rgba(197, 137, 64, 0.08); font-weight: bold; color: #7A726A; vertical-align: top;">Custom Requests:</td>
          <td style="padding: 0.75rem 0; border-bottom: 1px solid rgba(197, 137, 64, 0.08); line-height: 1.6;">${inquiry.message}</td>
        </tr>
      </table>
 
      <div style="text-align: center; margin-top: 2rem;">
        <p style="font-size: 0.8rem; color: #7A726A;">Sent persistently from your luxury Express server database.</p>
      </div>
    </div>
  `;

  const isRealGmailConfigured = GMAIL_USER && GMAIL_PASS && !GMAIL_PASS.startsWith('your_gmail') && GMAIL_PASS !== 'your_gmail_app_password_here' && GMAIL_PASS.trim() !== '';

  if (isRealGmailConfigured) {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: GMAIL_USER,
        pass: GMAIL_PASS
      }
    });

    const mailOptions = {
      from: `"Dream Decors Coordinator" <${GMAIL_USER}>`,
      to: RECEIVER_EMAIL,
      subject: mailSubject,
      html: mailHTML
    };

    try {
      await transporter.sendMail(mailOptions);
      console.log(`[Gmail API Gateway] Live notification successfully sent to ${RECEIVER_EMAIL}`);
    } catch (err) {
      console.error('[Gmail API Gateway] Failed to send live email notification:', err);
    }
  } else {
    // Write to simulated outbox database
    try {
      const outboxData = fs.readFileSync(OUTBOX_FILE, 'utf-8');
      const outbox = JSON.parse(outboxData);
      
      const loggedEmail = {
        id: `email-${Math.random().toString(36).substring(2, 8)}`,
        to: RECEIVER_EMAIL,
        subject: mailSubject,
        html: mailHTML,
        timestamp: new Date().toISOString()
      };
      
      outbox.push(loggedEmail);
      fs.writeFileSync(OUTBOX_FILE, JSON.stringify(outbox, null, 2), 'utf-8');
      
      console.log(`[Gmail API Simulator] GMAIL_PASS not configured. Simulated outbox notification logged for ${RECEIVER_EMAIL} in data/gmail_outbox.json`);
    } catch (err) {
      console.error('[Gmail API Simulator] Failed to write simulated outbox:', err);
    }
  }
}

// API: Get all consultations
app.get('/api/consultations', (req, res) => {
  try {
    const data = fs.readFileSync(DATA_FILE, 'utf-8');
    res.json(JSON.parse(data));
  } catch (error) {
    res.status(500).json({ error: 'Failed to read consultations database' });
  }
});

// API: Create a new consultation
app.post('/api/consultations', async (req, res) => {
  try {
    const { name, partner, date, venue, scale, styling, message } = req.body;
    
    // Simple validation
    if (!name || !date || !venue || !message) {
      return res.status(400).json({ error: 'Required fields are missing' });
    }

    const data = fs.readFileSync(DATA_FILE, 'utf-8');
    const consultations = JSON.parse(data);

    const newInquiry = {
      id: `inq-${Math.random().toString(36).substring(2, 8)}`,
      name,
      partner: partner || '',
      date,
      venue,
      scale,
      styling,
      message,
      timestamp: new Date().toISOString()
    };

    consultations.push(newInquiry);
    fs.writeFileSync(DATA_FILE, JSON.stringify(consultations, null, 2), 'utf-8');

    // Trigger asynchronous email delivery notification
    await sendEmailNotification(newInquiry);

    res.status(201).json({ success: true, inquiry: newInquiry });
  } catch (error) {
    console.error('[Dream Decors Backend] Error creating consultation:', error);
    res.status(500).json({ error: 'Failed to write to consultations database' });
  }
});

// Start Server locally
if (process.env.NODE_ENV !== 'production' && !process.env.VERCEL) {
  app.listen(PORT, () => {
    console.log(`[Dream Decors Backend] Server running at http://localhost:${PORT}`);
  });
}

export default app;
