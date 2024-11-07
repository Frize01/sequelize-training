# Projet d'entraînement avec Sequelize

Ce projet est un projet fictif qui me permettra d'apprendre à utiliser Sequelize. Le but de ce projet est de m'entraîner à réussir à faire une API avec NodeJS. Je vais par la suite ajouter d'autres briques au projet pour apprendre à utiliser en plus ExpressJS ainsi que réussir à faire une application avec VueJS ainsi que réussir à faire un monorepo. A terme j'aimerais aussi pouvoir tout éxécuter avec Docker.

Ça promet d'être chargé !

## Objectif du Projet

Créer une application web permettant aux utilisateurs de gérer leur budget personnel. L'application doit permettre de suivre les revenus et les dépenses, de catégoriser les transactions et de visualiser des rapports financiers.

## Technologies Utilisées

- **Backend** : Express JS
- **ORM** : Sequelize
- **Base de Données** : SQLite (dev) / PostgreSQL (prod)
- **Frontend** : Vue JS

## Installation du projet

```shell
npm i
```

## Execution du projet

```shell
node index.ts
```

## Others informations
### BDD :

Voici un tableau récapitulatif du schéma des tables :

| Table       | Colonne       | Type        | Clé          | Description                      |
|-------------|---------------|-------------|--------------|----------------------------------|
| **Users**   | `id`          | Integer     | Primary Key, Auto Increment | Identifiant unique de l'utilisateur |
|             | `username`    | String      |              | Nom d'utilisateur               |
|             | `email`       | String      | Unique       | Adresse email de l'utilisateur  |
|             | `password`    | String      |              | Mot de passe de l'utilisateur   |
| **Revenues** | `id`         | Integer     | Primary Key, Auto Increment | Identifiant unique du revenu    |
|             | `user_id`     | Integer     | Foreign Key ([Users.id](http://users.id/)) | Référence vers l'utilisateur (relation avec Users) |
|             | `description` | String      |              | Description du revenu           |
|             | `date`        | Date        |              | Date du revenu                  |
|             | `amount`      | Decimal     |              | Montant du revenu               |
| **Expenses**| `id`          | Integer     | Primary Key, Auto Increment | Identifiant unique de la dépense|
|             | `user_id`     | Integer     | Foreign Key ([Users.id](http://users.id/)) | Référence vers l'utilisateur (relation avec Users) |
|             | `description` | String      |              | Description de la dépense       |
|             | `date`        | Date        |              | Date de la dépense              |
|             | `amount`      | Decimal     |              | Montant de la dépense           |
|             | `category_id` | Integer     | Foreign Key ([Categories.id](http://categories.id/)) | Référence vers la catégorie (relation avec Categories) |
| **Categories** | `id`       | Integer     | Primary Key, Auto Increment | Identifiant unique de la catégorie |
|             | `user_id`     | Integer     | Foreign Key ([Users.id](http://users.id/)) | Référence vers l'utilisateur (relation avec Users) |
|             | `name`        | String      |              | Nom de la catégorie             |
