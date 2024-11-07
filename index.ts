// Apple des dépendances dans le projet
const Sequelize = require("sequelize");
const sqlite = require("sqlite3");

const sequelize = new Sequelize({
    dialect: "sqlite",
    storage: "database.sqlite",
});

const User = sequelize.define(
    "user",
    {
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
    },
    {
        // freezeTableName: true,
        // timestamps: false
    }
);

User.sync({ alter: true })
    .then((data) => {
        console.log("Table and model synced successfuly !");
    })
    .catch(() => {
        console.log("Error while syncing the table and model");
    });
