const axios = require('axios');

const adminMiddleware = async (req, res, next) => {
  try {
    const token = req.header('Authorization').replace('Bearer ', '');
    if (!token) {
      return res.status(401).json({ error: 'No token provided' });
    }

    const response = await axios.get('http://auth-service:3001/api/auth/getUserInfoFromToken', {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });

    const user = response.data;
    if (user.role !== 'admin') {
      return res.status(403).json({ error: 'Access denied' });
    }

    req.user = user;
    next();
  } catch (error) {
    return res.status(403).json({ error: 'Access denied' });
  }
};

module.exports = adminMiddleware;

