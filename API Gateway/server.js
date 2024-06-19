const express = require('express');
const proxy = require('express-http-proxy');
require('dotenv').config();

const adminMiddleware = require('./src/middleware/adminMiddleware');


const app = express();
const PORT = process.env.PORT || 3002;

app.use('/api/auth', proxy('http://auth:3001'));
app.use('/api/products', adminMiddleware, proxy('http://product-service:3000'));

app.listen(PORT, () => {
  console.log(`API Gateway running on port ${PORT}`);
});

