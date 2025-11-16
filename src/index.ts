import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.get('/verified', (req, res) => {
  const email = req.query.email || "";

  res.type('html').send(`
    <!doctype html>
    <html lang="en">
    <head>
      <meta charset="utf-8"/>
      <title>HealthZ – Email Verified</title>
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <style>
        body {
          margin: 0;
          padding: 0;
          background-color: #F0F7F2;
          font-family: -apple-system, BlinkMacSystemFont, 'Inter', sans-serif;
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 100vh;
        }
        .card {
          background: #ffffff;
          padding: 40px 32px;
          border-radius: 20px;
          width: 95%;
          max-width: 440px;
          box-shadow: 0 12px 30px rgba(0,0,0,0.1);
          text-align: center;
        }
        .logo {
          font-size: 32px;
          font-weight: 800;
          color: #27692A;
          margin-bottom: 12px;
        }
        .badge {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          background: #ECFDF5;
          color: #047857;
          padding: 6px 14px;
          border-radius: 999px;
          font-size: 14px;
          font-weight: 600;
          margin-bottom: 20px;
        }
        h1 {
          margin: 0;
          font-size: 24px;
          color: #111827;
          font-weight: 700;
          margin-bottom: 10px;
        }
        p {
          margin: 0;
          color: #4B5563;
          font-size: 15px;
          line-height: 1.6;
        }
        .email {
          font-weight: 600;
          color: #111827;
        }
        .sub {
          margin-top: 24px;
          font-size: 13px;
          color: #6B7280;
        }
      </style>
    </head>
    <body>
      <div class="card">
        <div class="logo">HealthZ</div>

        <div class="badge">✓ Email Verified</div>

        <h1>You're all set!</h1>

        ${
          email
            ? `<p>Your email <span class="email">${email}</span> has been successfully confirmed.</p>`
            : `<p>Your email has been successfully confirmed.</p>`
        }

        <p>You may now return to the HealthZ app. It will automatically finish your signup once everything is set.</p>

      </div>
    </body>
    </html>
  `)
});


// Health check
app.get('/healthz', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

export default app;
