const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.post('/contact', (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required.' });
  }

  // Log to console — swap this for nodemailer/SendGrid/etc. to send real emails
  console.log(`\n--- New message ---`);
  console.log(`From: ${name} <${email}>`);
  console.log(`Message: ${message}`);
  console.log(`------------------\n`);

  res.json({ success: true });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
