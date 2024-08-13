// init database
const sequelize = require('./config/db');
const { User, Property, Report } = require('./models/associations');

async function initDB() {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');

    // create extension
    await sequelize.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp";');

    await sequelize.sync({ force: true });
    console.log('All models were synchronized successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  } finally {
    await sequelize.close();
  }
}

initDB();
