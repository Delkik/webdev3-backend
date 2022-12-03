import { STRING } from 'sequelize';
import { define } from '../db';

const Employee = define("employee", {

  first: {
    type: STRING,
    allowNull: false
  },

  last: {
    type: STRING
  },

  department: {
    type: STRING
  },

});

export default Employee;