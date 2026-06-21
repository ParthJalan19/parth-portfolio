const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
require('dotenv').config({ override: true });

const Contact = require('./models/Contact');

const app = express();
const PORT = process.env.PORT || 5000;

let isConnecting = null;

const connectDB = async () => {
  if (mongoose.connection.readyState === 1) {
    return;
  }
  
  if (mongoose.connection.readyState === 2) {
    if (isConnecting) {
      await isConnecting;
    } else {
      await new Promise((resolve) => {
        mongoose.connection.once('open', resolve);
        mongoose.connection.once('error', resolve);
      });
    }
    return;
  }

  isConnecting = mongoose.connect(process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/portfolio');
  
  try {
    await isConnecting;
    console.log('Database connected successfully!');
  } catch (err) {
    console.error('Database connection error:', err.message);
    isConnecting = null;
    throw err;
  }
};

// Start connecting eagerly in the background when the file is loaded
connectDB().catch(() => {});


// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Middleware to strip Netlify function routing prefix if present
app.use((req, res, next) => {
  if (req.url.startsWith('/.netlify/functions/api')) {
    req.url = req.url.replace('/.netlify/functions/api', '/api');
  }
  next();
});

// Serve static assets from workspace root (only for local testing)
if (require.main === module) {
  app.use(express.static(path.join(__dirname)));
}

// API Route: Handle Contact Form Submissions
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;
    
    // Quick validation checks
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ error: 'All fields are required.' });
    }

    // Await database connection to finish connecting (important for serverless environment)
    try {
      await connectDB();
    } catch (connErr) {
      console.error('Connection attempt failed:', connErr.message);
    }

    // If MongoDB is connected, save directly to Atlas
    if (mongoose.connection.readyState === 1) {
      const newContact = new Contact({ name, email, subject, message });
      await newContact.save();
      console.log(`Saved to MongoDB Atlas from ${name} (${email})`);
      return res.status(201).json({ message: 'Inquiry saved successfully to MongoDB Atlas!' });
    } else {
      // If running on Netlify serverless, we cannot write local fallback files (read-only filesystem)
      if (process.env.NETLIFY) {
        console.error('Database connection is offline. Cannot write local fallback file on Netlify (Read-only filesystem).');
        return res.status(503).json({ error: 'Database is currently offline. Please configure your MONGO_URI environment variable in Netlify Site Settings.' });
      }

      // Fallback: Save locally to contacts_fallback.json if offline
      const fs = require('fs');
      const fallbackFile = path.join(__dirname, 'contacts_fallback.json');
      
      let contacts = [];
      if (fs.existsSync(fallbackFile)) {
        try {
          contacts = JSON.parse(fs.readFileSync(fallbackFile, 'utf8'));
        } catch (e) {
          contacts = [];
        }
      }
      
      const newInquiry = { name, email, subject, message, createdAt: new Date() };
      contacts.push(newInquiry);
      fs.writeFileSync(fallbackFile, JSON.stringify(contacts, null, 2), 'utf8');
      
      console.log(`Saved locally to JSON file (Atlas offline) from ${name} (${email})`);
      return res.status(201).json({ message: 'Inquiry saved locally (Database offline/resolving)!' });
    }

    
  } catch (err) {
    console.error('Error saving contact request:', err.message);
    
    // Check validation error from mongoose
    if (err.name === 'ValidationError') {
      const messages = Object.values(err.errors).map(val => val.message);
      return res.status(400).json({ error: messages.join(', ') });
    }
    
    // If running on Netlify serverless, do not attempt to write fallback files
    if (process.env.NETLIFY) {
      return res.status(500).json({ error: `Database error: ${err.message}. Please configure your MONGO_URI in your Netlify Dashboard.` });
    }

    // Final fallback: Save locally if Mongoose fails during write
    try {
      const fs = require('fs');
      const fallbackFile = path.join(__dirname, 'contacts_fallback.json');
      let contacts = [];
      if (fs.existsSync(fallbackFile)) {
        try {
          contacts = JSON.parse(fs.readFileSync(fallbackFile, 'utf8'));
        } catch (e) {
          contacts = [];
        }
      }
      const newInquiry = { ...req.body, createdAt: new Date(), error: err.message };
      contacts.push(newInquiry);
      fs.writeFileSync(fallbackFile, JSON.stringify(contacts, null, 2), 'utf8');
      console.log(`Saved locally on catch block from ${req.body.name}`);
      return res.status(201).json({ message: 'Inquiry saved locally due to database timeout!' });
    } catch (fsErr) {
      return res.status(500).json({ error: 'Failed to save inquiry.' });
    }
  }
});

// Serve static assets and listen only when executed directly (local development mode)
if (require.main === module) {
  // Serve static assets from workspace root
  app.use(express.static(path.join(__dirname)));

  // Fallback Route: Serve index.html for all other routes
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
  });

  app.listen(PORT, () => {
    console.log(`Portfolio server is running on http://localhost:${PORT}`);
  });
}

module.exports = app;
