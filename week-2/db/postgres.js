require('dotenv').config();
const Sequelize = require('sequelize');

const database = process.env.DB;
const username = process.env.USERNAME;
const password = process.env.PASSWORD;

// //const sequelize = new Sequelize('database', 'username', 'password'
// const sequelize = new Sequelize('users', 'yusuf', '1234567', {
//     dialect: 'postgres',
//     operatorsAliases: false,
//     pool: {
//         max: 5,
//         min: 0,
//         acquire: 30000,
//         idle: 10000
//     }
// });

sequelize.sync()

module.exports = sequelize;
