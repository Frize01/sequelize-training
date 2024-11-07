// Apple des dépendances dans le projet
const Sequelize = require("sequelize");
const sqlite = require("sqlite3");
const { DataTypes } = Sequelize;

const sequelize = new Sequelize({
    dialect: "sqlite",
    storage: "database.sqlite",
});

const User = sequelize.define(
    "user",
    {
        username: {
            type: DataTypes.STRING(96),
            allowNull: false,
            defaultValue: "Titouan",
        },
        email: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
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
