
// Mortgage Payment
function calculateMonthlyPayment(loanAmount, interestRate, loanTerm) {
    const monthlyRate = interestRate / 12 / 100;
    const totalMonths = loanTerm * 12;
    const monthlyPayment = (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) / (Math.pow(1 + monthlyRate, totalMonths) - 1);
    return monthlyPayment;
}

// income per month
function calculateIncomePerMonth(rentalIncome, rentalIncomeOther) {
    // acoording to the market situation
    const other = rentalIncomeOther || 0;
    const incomePerMonth = rentalIncome + other;
    return incomePerMonth;
}

// expenses per month
function calculateExpensesPerMonth(propertyTaxPeriod, propertyTax, insurancePeriod, insurance,
    repairsMaintenance, vacancy, capitalExpenditures, managementFees, electricity, gas,
    waterAndSewer, hoaFees, garbage, other) {
    // acoording to the market situation
    let expensesPerMonth = 0;
    let propertyTaxMonth = 1;
    switch(propertyTaxPeriod) {
        case 'annual': 
            propertyTaxMonth = 12;
            break;
        case 'half-year':
            propertyTaxMonth = 6;
            break;
        case 'quarter':
            propertyTaxMonth = 3;
            break;
        case 'month':
            propertyTaxMonth = 1;
            break;
    }
    expensesPerMonth += propertyTax / propertyTaxMonth;
    let insuranceMonth = 1;
    switch(insurancePeriod) {
        case 'annual': 
            insuranceMonth = 12;
            break;
        case 'half-year':
            insuranceMonth = 6;
            break;
        case 'quarter':
            insuranceMonth = 3;
            break;
        case 'month':
            insuranceMonth = 1;
            break;
    }
    expensesPerMonth += insurance / insuranceMonth;
    expensesPerMonth += (repairsMaintenance + vacancy + capitalExpenditures + managementFees) / 12;
    expensesPerMonth += electricity + gas + waterAndSewer + hoaFees + garbage + other;
    return expensesPerMonth;
}

// monthly cash flow
function calculateMonthlyCashFlow(incomePerMonth, expensesPerMonth, mortgagePayment) {
    return incomePerMonth - expensesPerMonth - mortgagePayment;
}

// CoC ROI
function calculateCoCRoi(purchasePrice, purchasingClosingPrice, repairCosts, loanAmount, monthlyCashFlow) {
    const initialCashInvestment = purchasePrice - loanAmount + purchasingClosingPrice + repairCosts;
    const annualCashFlow = monthlyCashFlow * 12;
    const cocRoi = (annualCashFlow / initialCashInvestment) * 100;
    return cocRoi;
}

// Annualized Return
function calculateAnnualizedReturn(afterRepairValue, monthlyCashFlow, years, purchasePrice, purchasingClosingPrice, repairCosts, loanAmount) {
    const annualCashFlow = monthlyCashFlow * 12;
    const finalValue = afterRepairValue + (annualCashFlow * 5);
    const initialCashInvestment = purchasePrice - loanAmount + purchasingClosingPrice + repairCosts;
    const yearsAnnualizedReturn = (Math.pow(finalValue / initialCashInvestment, 1 / years) - 1) * 100;
    return yearsAnnualizedReturn;
}

// NOI
function calculateNOI(incomePerMonth, expensesPerMonth) {
    const noi = (incomePerMonth - expensesPerMonth) * 12;
    return noi;
}

// Pro Forma Cap Rate
function calculateCapRate(noi, purchasePrice) {
    return (noi / purchasePrice) * 100;
}

module.exports = {
    calculateMonthlyPayment,
    calculateIncomePerMonth,
    calculateExpensesPerMonth,
    calculateMonthlyCashFlow,
    calculateCoCRoi,
    calculateAnnualizedReturn,
    calculateNOI,
    calculateCapRate
};
