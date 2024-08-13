const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Property = sequelize.define('Property', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    //added propertyName
    propertyName: {
        type: DataTypes.STRING,
        allowNull: true
    },
    streetAddress: {
        type: DataTypes.STRING,
        allowNull: false
    },
    city: {
        type: DataTypes.STRING,
        allowNull: true
    },
    state: {
        type: DataTypes.STRING,
        allowNull: true
    },
    zipcode: {
        type: DataTypes.STRING,
        allowNull: true
    },
    picture: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    propertyDescription: {
        type: DataTypes.STRING,
        allowNull: true
    },
    purchasePrice: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    purchasingClosingPrice: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    afterRepairValue: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    repairCosts: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    cashPurchase: {
        type: DataTypes.BOOLEAN,
        allowNull: true
    },
    loanAmount: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    interestRate: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    pointsCharged: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    loanTerm: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    propertyTax: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    propertyTaxPeriod: {
        type: DataTypes.ENUM('month', 'quarter', 'half-year', 'annual'),
        allowNull: false
    },
    insurance: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    insurancePeriod: {
        type: DataTypes.ENUM('month', 'quarter', 'half-year', 'annual'),
        allowNull: false
    },
    // add rentalIncome
    rentalIncome: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    // add rentalIncomeOther
    rentalIncomeOther: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    repairsMaintenance: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    vacancy: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    capitalExpenditures: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    managementFees: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    electricity: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    gas: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    waterAndSewer: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    hoaFees: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    garbage: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    other: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    userId: {
        type: DataTypes.UUID,
        allowNull: false
    }
}, {
    tableName: 'properties'
});

module.exports = Property;
