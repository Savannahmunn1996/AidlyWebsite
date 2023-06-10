const express = require('express');
const app = express();
const axios = require('axios');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('<YOUR_MONGODB_URI>', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Set up server port
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
