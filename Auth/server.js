const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const authRoutes = require('./src/routes/authRoutes');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(bodyParser.json());

mongoose.connect(process.env.MONGO_URI, {
  ssl: process.env.MONGO_SSL
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((error) => {
  console.error('MongoDB connection error:', error);
});

app.use('/', authRoutes);

app.listen(PORT, () => {
  console.log(`Auth service running on port ${PORT}`);
});
