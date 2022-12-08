const Sequelize = require('sequelize');
const db = require('../db');

const Employee = db.define("employee", {

  first: {
    type: Sequelize.STRING,
    allowNull: false
  },

  last: {
    type: Sequelize.STRING
  },

  department: {
    type: Sequelize.STRING
  },

});

module.exports = Employee;