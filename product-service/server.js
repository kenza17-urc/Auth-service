const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {
    ssl: process.env.MONGO_SSL
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.log('Failed to connect to MongoDB', err));

const productRoutes = require('./src/routes/productRoutes');
app.use('/', productRoutes);

app.listen(PORT, () => {
  console.log(`Product service running on port ${PORT}`);
});
