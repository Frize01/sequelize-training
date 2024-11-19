require('dotenv').config();

const config = {
  appName: 'My Express App',
  port: process.env.PORT || 3000,
  environment: process.env.NODE_ENV || 'development',
  jwtSecret: process.env.JWT_SECRET || 'default_secret', // Clé pour les tokens JWT
  db: {
    dialect: 'sqlite', // Peut être changé pour 'mysql', 'postgres', etc.
    storage: './database.sqlite',
  },
};

module.exports = config;
