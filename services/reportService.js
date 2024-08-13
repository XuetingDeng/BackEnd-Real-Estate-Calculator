// const { Report, Property } = require('../models');
const Report = require('../models/Report');
const Property = require('../models/Property');
const calculations = require('../util/calculations');


const generateReport = async (propertyId) => {
    const property = await Property.findByPk(propertyId);
    if (!property) {
        throw new Error('Property not found');
    }
    const monthlyMortgagePayment = calculations.calculateMonthlyPayment(property.loanAmount, property.interestRate, property.loanTerm);
    const incomePerMonth = calculations.calculateIncomePerMonth(property.rentalIncome, property.rentalIncomeOther);

    const expensesPerMonth = calculations.calculateExpensesPerMonth(
        property.propertyTaxPeriod, property.propertyTax,
        property.insurancePeriod, property.insurance,
        property.repairsMaintenance, property.vacancy,
        property.capitalExpenditures, property.managementFees,
        property.electricity, property.gas,
        property.waterAndSewer, property.hoaFees,
        property.garbage, property.other
    );
    // const expensesPerMonth = 1000;
    const monthlyCashFlow = calculations.calculateMonthlyCashFlow(incomePerMonth, expensesPerMonth, monthlyMortgagePayment);

    const cocRoi = calculations.calculateCoCRoi(property.purchasePrice, property.purchasingClosingPrice, property.repairCosts, property.loanAmount, monthlyCashFlow);
    const yearsAnnualizedReturn = calculations.calculateAnnualizedReturn(property.afterRepairValue, monthlyCashFlow, 5,
        property.purchasePrice, property.purchasingClosingPrice, property.repairCosts, property.loanAmount);

    const noi = calculations.calculateNOI(incomePerMonth, expensesPerMonth);

    const proFormaCapRate = calculations.calculateCapRate(noi, property.purchasePrice)
    // check whether create or update the report
    const existingReport = await Report.findOne({ where: { propertyId } });
    const formatToTwoDecimalPlaces = (value) => {
        if (typeof value === 'number') {
            return parseFloat(value.toFixed(2));
        }
        return value;
    };
    const formattedMonthlyCashFlow = formatToTwoDecimalPlaces(monthlyCashFlow);
    const formattedIncomePerMonth = formatToTwoDecimalPlaces(incomePerMonth);
    const formattedExpensesPerMonth = formatToTwoDecimalPlaces(expensesPerMonth);
    const formattedCocRoi = formatToTwoDecimalPlaces(cocRoi);
    const formattedFiveYearAnnualizedReturn = formatToTwoDecimalPlaces(yearsAnnualizedReturn);
    const formattedMortgagePayment = formatToTwoDecimalPlaces(monthlyMortgagePayment);
    const formattedNoi = formatToTwoDecimalPlaces(noi);
    const formattedProFormaCapRate = formatToTwoDecimalPlaces(proFormaCapRate);

    if (existingReport) {

        await existingReport.update({
            monthlyCashFlow: formattedMonthlyCashFlow,
            incomePerMonth: formattedIncomePerMonth,
            expensesPerMonth: formattedExpensesPerMonth,
            cocRoi: formattedCocRoi,
            fiveYearAnnualizedReturn: formattedFiveYearAnnualizedReturn,
            mortgagePayment: formattedMortgagePayment,
            noi: formattedNoi,
            proFormaCapRate: formattedProFormaCapRate
        });
        // await existingReport.update({
        //     monthlyCashFlow,
        //     incomePerMonth,
        //     expensesPerMonth,
        //     cocRoi,
        //     fiveYearAnnualizedReturn: yearsAnnualizedReturn,
        //     mortgagePayment: monthlyMortgagePayment,
        //     noi,
        //     proFormaCapRate
        // });

        return existingReport;
    } else {
        const report = await Report.create({
            // propertyId,
            // userId: property.userId,
            // monthlyCashFlow,
            // incomePerMonth,
            // expensesPerMonth,
            // cocRoi,
            // fiveYearAnnualizedReturn: yearsAnnualizedReturn,
            // mortgagePayment: monthlyMortgagePayment,
            // noi,
            // proFormaCapRate
            propertyId,
            userId: property.userId,
            monthlyCashFlow: formattedMonthlyCashFlow,
            incomePerMonth: formattedIncomePerMonth,
            expensesPerMonth: formattedExpensesPerMonth,
            cocRoi: formattedCocRoi,
            fiveYearAnnualizedReturn: formattedFiveYearAnnualizedReturn,
            mortgagePayment: formattedMortgagePayment,
            noi: formattedNoi,
            proFormaCapRate: formattedProFormaCapRate
        });

        return report;
    }

};

module.exports = {
    generateReport
};
