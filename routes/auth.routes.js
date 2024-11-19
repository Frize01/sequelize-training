const express = require('express');
const authController = require('../controllers/auth.controller');
const { verifyToken } = require('../middlewares/auth.middleware');

const router = express.Router();

// Routes d'authentification
router.post('/register', authController.register);
router.post('/login', authController.login);

// Exemple de route protégée
router.get('/profile', verifyToken, (req, res) => {
  res.status(200).json({ message: 'This is a protected route.', userId: req.userId });
});

module.exports = router;
