const jwt = require('jsonwebtoken');
const config = require('../config/app.config');

// Middleware pour vérifier un token JWT
exports.verifyToken = (req, res, next) => {
  const token = req.headers['authorization'];
  if (!token) {
    return res.status(403).json({ message: 'No token provided!' });
  }

  jwt.verify(token.split(' ')[1], config.jwtSecret, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: 'Unauthorized!' });
    }
    req.userId = decoded.id; // Ajout de l'ID utilisateur pour la suite
    next();
  });
};

// Middleware pour les autorisations (exemple : rôle admin)
exports.isAdmin = (req, res, next) => {
  if (req.userRole !== 'admin') {
    return res.status(403).json({ message: 'Admin role required!' });
  }
  next();
};
