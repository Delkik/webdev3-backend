import { INTEGER, STRING } from 'sequelize';
import { define } from '../db';

const Task = define("task", {

  description: {
    type: STRING,
    allowNull: false
  },

  priority: {
    type: INTEGER
  },

  completion: {
    type: STRING
  },

});

export default Task;