// Apple des dépendances dans le projet
const Sequelize = require("sequelize");
const sqlite = require("sqlite3");

const sequelize = new Sequelize({
    dialect: "sqlite",
    storage: "database.sqlite",
});

const User = sequelize.define("user", {
    id: {
        type: Sequelize.DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
    },
    username: {
        type: Sequelize.DataTypes.STRING(96),
        allowNull: false,
        defaultValue: "Titouan",
    },
    email: {
        type: Sequelize.DataTypes.STRING,
        unique: true,
        allowNull: false,
    },
    password: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
    },
});

User.sync().then((data) => {
    console.log('Table and model synced successfuly !')
}).catch(() => {
    console.log('Error while syncing the table and model')
})
