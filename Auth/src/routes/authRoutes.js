const express = require('express');
const { register, login } = require('../controllers/authController');
const authenticateToken = require('./middleware/authenticateToken');

const router = express.Router();

router.post('/register', register);
router.post('/login', login);

router.get('/getUserInfoFromToken', authenticateToken, (req, res) => {
    const user = req.user;
    res.status(200).json({ id: user.id, role: user.role });
  });

module.exports = router;
