const Sequelize = require('sequelize');

const sequelize = new Sequelize('nodejsDB', 'sqluser', 'Arundhati@58', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;
