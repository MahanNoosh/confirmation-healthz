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
          animation: fadeIn 0.5s ease-out;
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
        .button {
          display: inline-block;
          margin-top: 24px;
          padding: 14px 28px;
          background: #059669;
          color: #ffffff;
          font-weight: 600;
          font-size: 16px;
          border-radius: 999px;
          text-decoration: none;
          transition: 0.2s ease;
        }
        .button:hover {
          background: #047857;
        }
        .sub {
          margin-top: 14px;
          font-size: 13px;
          color: #9CA3AF;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(15px); }
          to { opacity: 1; transform: translateY(0); }
        }
      </style>
    </head>

    <body>
      <div class="card">

        <div class="logo">HealthZ</div>

        <div class="badge">✅ Email Verified</div>

        <h1>You're all set!</h1>

        ${
          email
            ? `<p>Your email <span class="email">${email}</span> has been successfully confirmed.</p>`
            : `<p>Your email has been successfully confirmed.</p>`
        }

        <p>You can now log in to the HealthZ app and continue.</p>

        <a class="button" href="#">Return to HealthZ</a>

        <div class="sub">If nothing happens, simply reopen the app and log in normally.</div>

      </div>
    </body>
    </html>
  `)
})
