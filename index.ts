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
    .then(() => {
        console.log("Table and model synced successfuly !");

        // la création d'un utilisateur est une opération asynchrone
        // on peut donc utiliser les méthodes .then() et .catch()
        // pour gérer la réponse de l'opération
        // on a deux méthodes possibles :
        // - la méthode build()
        // - la méthode create()

        // Création d'un utilisateur (méthode d'instance)
        const user = User.build({ username: "Titouan", email: "titouan@gmail.com", password: "azerty" });
        user.username = "Titou"
        user.save();

        // Affichage de l'utilisateur créé
        console.log(user.toJSON());

        // Création d'un utilisateur (méthode statique)
        return User.create({
            username: "Ji Tan",
            email: "jitan@gmail.com",
            password: "azerty",
        });
    }).then((data) => {
        // Update de l'utilisateur créé
        console.log(data.toJSON());
        data.username = "Abdel";
        data.email = "abdel@gmail.com";
        // Enregistrement de l'utilisateur modifié
        data.save();
        // Affichage de l'utilisateur modifié
        console.log(data.toJSON());

        // suppression de l'utilisateur créé
        data.destroy();

        // suppression de l'utilisateur Titou
        // En général prendre l'ID de l'utilisateur pas le nom
        return User.destroy({ where: { username: 'Titou' } });
    })
    .catch(() => {
        console.log("Error while syncing the table and model");
    });
