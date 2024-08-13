const User = require('./User');
const Property = require('./Property');
const Report = require('./Report');

// User and Property
User.hasMany(Property, { foreignKey: 'userId', as: 'properties' });
Property.belongsTo(User, { foreignKey: 'userId', as: 'user' });

// Property and Report
Property.hasOne(Report, { foreignKey: 'propertyId', as: 'report' });
Report.belongsTo(Property, { foreignKey: 'propertyId', as: 'property' });

// User and Report
User.hasMany(Report, { foreignKey: 'userId', as: 'reports' });
Report.belongsTo(User, { foreignKey: 'userId', as: 'user' });

module.exports = {
  User,
  Property,
  Report
};