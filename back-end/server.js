// server.js

const express = require('express');
const bodyParser = require('body-parser');
const bookingRoutes = require('./bookingRoutes');

const app = express();
const port = 3000; // Choose a suitable port

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use('/booking', bookingRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
