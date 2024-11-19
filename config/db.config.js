const { Sequelize } = require('sequelize');
const config = require('./app.config');

const sequelize = new Sequelize({
  dialect: config.db.dialect,
  storage: config.db.storage,
});

// Pour d'autres SGBD (comme MySQL ou PostgreSQL)
// const sequelize = new Sequelize(config.db.database, config.db.username, config.db.password, {
//     host: config.db.host,
//     dialect: config.db.dialect,
//   });
  

module.exports = sequelize;
