const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Report = sequelize.define('Report', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    propertyId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: 'properties', 
            key: 'id'
        },
        onDelete: 'CASCADE'
    },
    userId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: 'users',
            key: 'id'
        },
        onDelete: 'CASCADE'
    },
    monthlyCashFlow: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    incomePerMonth: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    expensesPerMonth: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    cocRoi: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    fiveYearAnnualizedReturn: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    mortgagePayment: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    noi: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    proFormaCapRate: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    createdAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    },
    updatedAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    }
}, {
    tableName: 'reports'
});

module.exports = Report;
