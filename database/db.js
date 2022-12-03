// Instantiate database 

// Module dependencies;
import Sequelize from 'sequelize';
import { dbName, dbUser, dbPwd } from './utils/configDB';

// Confirmation message (limit these in production);
console.log('Opening database connection');

// This is our entry point, we instantiate the Sequelize instance accordingly;
const db = new Sequelize(dbName, dbUser, dbPwd, {
  host: 'localhost',
  dialect: 'postgres',
  port: 5432,
});
// Export our instance of Sequelize, which will be modified with models;
export default db;