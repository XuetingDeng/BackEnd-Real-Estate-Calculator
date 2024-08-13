// const { Sequelize } = require('sequelize');

// const sequelize = new Sequelize({
//   database: process.env.DB_NAME || 'real_estate_calc',
//   username: process.env.DB_USER || 'postgres',
//   password: process.env.DB_PASS || '0624',
//   host: process.env.DB_HOST || '34.94.238.81',
//   port: process.env.DB_PORT || 5432,
//   dialect: 'postgres',
//   logging: false,
//   define: {
//     underscored: true,
//   },
// });

// module.exports = sequelize;


const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('real-estate-calc', 'postgres', '1201ILove185', {
  host: 'localhost',
  port: 5432,
  dialect: 'postgres',
  logging: false,
  define: {
    underscored: true,
  },
});

sequelize.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });

module.exports = sequelize;