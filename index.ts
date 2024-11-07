// Apple des dépendances dans le projet
const Sequelize = require('sequelize');
const sqlite = require('sqlite3');

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'database.sqlite'
  });

sequelize.authenticate().then(() => {
    console.log('Connexion réussie !');
}).catch((err) => {
    console.log('Erreur de connexion à la base de données !');
});

// Actuellement cette ligne apparaît avant dans la console
// J'imagine que la fonction authenticate() est async
console.log('Étape suivante ?');