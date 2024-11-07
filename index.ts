// Apple des dépendances dans le projet
const Sequelize = require('sequelize');
const sqlite = require('sqlite3');

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'database.sqlite'
  });

async function loginToBDD(){
    await sequelize.authenticate();
    console.log('Connction successful');
}

loginToBDD();
console.log('Étape suivante ?');