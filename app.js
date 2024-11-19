const express = require('express');
const cors = require('cors');
const config = require('./config/app.config');
const authRoutes = require('./routes/auth.routes');

const app = express();

// Middlewares globaux
app.use(cors());
app.use(express.json());

// Routes principales
app.use('/api/auth', authRoutes);

// Middleware d'erreur générique
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Internal Server Error' });
});

module.exports = app;
