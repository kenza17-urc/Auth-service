const express = require('express');
const proxy = require('express-http-proxy');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3002;

app.use('/api/auth', proxy('http://localhost:3001'));

app.listen(PORT, () => {
  console.log(`API Gateway running on port ${PORT}`);
});

