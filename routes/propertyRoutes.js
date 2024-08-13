/**
 * @api {post} /properties Create a new property
 * @apiName CreateProperty
 * @apiGroup Property
 * @apiHeader {String} Authorization Bearer token.
 * 
 * 
 * @apiParam {UUID} id The property ID. （required）
 * @apiParam {UUID} userId The ID of the user who owns the property.（required）
 * @apiParam {String} streetAddress Street address of the property.（required）
 * @apiParam {String} [city] City of the property.
 * @apiParam {String} [state] State of the property.
 * @apiParam {String} [zipcode] Zip code of the property.
 * @apiParam {TEXT} [picture] Picture base64 string.
 * @apiParam {String} [propertyDescription] Description of the property.
 * @apiParam {Integer} purchasePrice Purchase price of the property.（required）
 * @apiParam {Integer} purchasingClosingPrice Purchasing closing price of the property.（required）
 * @apiParam {Integer} afterRepairValue After repair value of the property.（required）
 * @apiParam {Integer} repairCosts Repair costs of the property.（required）
 * @apiParam {Boolean} [cashPurchase] Whether the property is a cash purchase.
 * @apiParam {Integer} [loanAmount] Total loan amount for the property（required）
 * @apiParam {Float} interestRate Interest rate for the loan per year.（required）
 * @apiParam {Integer} loanTerm Loan term in months.（required）
 * @apiParam {Integer} pointsCharged points charged.
 * @apiParam {Integer} propertyTax Property tax amount.（required）
 * @apiParam {String} propertyTaxPeriod Property tax period. 'month','quarter', 'half-year', 'annual'（required）
 * @apiParam {Integer} insurance insurance amount.（required）
 * @apiParam {String} insurancePeriod insurance period. 'month','quarter', 'half-year', 'annual'（required）
 * @apiParam {Integer} [repairsMaintenance] Repairs and maintenance cost per year.
 * @apiParam {Integer} [vacancy] Vacancy cost per year.
 * @apiParam {Integer} [capitalExpenditures] Capital expenditures cost per year.
 * @apiParam {Integer} [managementFees] Management fees per year.
 * @apiParam {Integer} [electricity] Electricity cost per month.
 * @apiParam {Integer} [gas] Gas cost per month.
 * @apiParam {Integer} [waterAndSewer] Water and sewer cost per month.
 * @apiParam {Integer} [hoaFees] HOA fees per month.
 * @apiParam {Integer} [garbage] Garbage cost per month.
 * @apiParam {Integer} [other] Other costs per month.
 * 
 * @apiSuccessExample {json} Success-Response:
 *  HTTP/1.1 200 OK
{
    "id": "0435aaf8-71b5-4b42-a4a1-9bf52b510089",
    "streetAddress": "123 Main St",
    "city": "San Francisco",
    "state": "CA",
    "zipcode": "94105",
    "picture": "url_to_picture",
    "propertyDescription": "Spacious and modern apartment",
    "purchasePrice": 500000,
    "purchasingClosingPrice": 500001,
    "afterRepairValue": 600000,
    "repairCosts": 20000,
    "cashPurchase": false,
    "loanAmount": 400000,
    "interestRate": 4.5,
    "pointsCharged": 2,
    "loanTerm": 30,
    "propertyTax": 5000,
    "propertyTaxPeriod": "month",
    "insurance": 1200,
    "insurancePeriod": "month",
    "repairsMaintenance": 1000,
    "vacancy": 800,
    "capitalExpenditures": 1500,
    "managementFees": 700,
    "electricity": 600,
    "gas": 300,
    "waterAndSewer": 400,
    "hoaFees": 250,
    "garbage": 100,
    "other": 200,
    "userId": "c14e0ff9-9eb6-496a-bc16-3c8030062f4e",
    "createdAt": "2024-07-08T21:21:12.686Z",
    "updatedAt": "2024-07-08T21:21:12.686Z"
}
 */

/**
 * @api {get} /properties/ Retrieve all properties
 * @apiName GetAllProperties
 * @apiGroup Property
 * @apiHeader {String} Authorization Bearer token.
 * 
 * @apiParam {UIUD} id User's unique ID
 * 
 *  * @apiSuccessExample {json} Success-Response:
 *  HTTP/1.1 200 OK
[
    {
        "id": "0435aaf8-71b5-4b42-a4a1-9bf52b510089",
        "streetAddress": "123 Main St",
        "city": "San Francisco",
        "state": "CA",
        "zipcode": "94105",
        "picture": "url_to_picture",
        "propertyDescription": "Spacious and modern apartment",
        "purchasePrice": 500000,
        "purchasingClosingPrice": 500001,
        "afterRepairValue": 600000,
        "repairCosts": 20000,
        "cashPurchase": false,
        "loanAmount": 400000,
        "interestRate": 4.5,
        "pointsCharged": 2,
        "loanTerm": 30,
        "propertyTax": 5000,
        "propertyTaxPeriod": "month",
        "insurance": 1200,
        "insurancePeriod": "month",
        "repairsMaintenance": 1000,
        "vacancy": 800,
        "capitalExpenditures": 1500,
        "managementFees": 700,
        "electricity": 600,
        "gas": 300,
        "waterAndSewer": 400,
        "hoaFees": 250,
        "garbage": 100,
        "other": 200,
        "userId": "c14e0ff9-9eb6-496a-bc16-3c8030062f4e",
        "createdAt": "2024-07-08T21:21:12.686Z",
        "updatedAt": "2024-07-08T21:21:12.686Z"
    },
    {
        "id": "11059ded-5589-45e4-a721-bb7c93d4b03f",
        "streetAddress": "222 Main St",
        "city": "San Francisco",
        "state": "CA",
        "zipcode": "94105",
        "picture": "url_to_picture",
        "propertyDescription": "Spacious and modern apartment",
        "purchasePrice": 500000,
        "purchasingClosingPrice": 500001,
        "afterRepairValue": 600000,
        "repairCosts": 20000,
        "cashPurchase": false,
        "loanAmount": 400000,
        "interestRate": 4.5,
        "pointsCharged": 2,
        "loanTerm": 30,
        "propertyTax": 5000,
        "propertyTaxPeriod": "month",
        "insurance": 1200,
        "insurancePeriod": "month",
        "repairsMaintenance": 1000,
        "vacancy": 800,
        "capitalExpenditures": 1500,
        "managementFees": 700,
        "electricity": 600,
        "gas": 300,
        "waterAndSewer": 400,
        "hoaFees": 250,
        "garbage": 100,
        "other": 200,
        "userId": "c14e0ff9-9eb6-496a-bc16-3c8030062f4e",
        "createdAt": "2024-07-08T22:11:58.183Z",
        "updatedAt": "2024-07-08T22:11:58.183Z"
    }
]
*/


/**
 * @api {get} /properties/getPropertyById/ Retrieve the property by id
 * @apiName getPropertyById
 * @apiGroup Property
 * @apiHeader {String} Authorization Bearer token.
 * 
 * @apiParam {UIUD} id property's unique ID
 * 
 *  * @apiSuccessExample {json} Success-Response:
 *  HTTP/1.1 200 OK
{
    "id": "0435aaf8-71b5-4b42-a4a1-9bf52b510089",
    "streetAddress": "123 Main St",
    "city": "San Francisco",
    "state": "CA",
    "zipcode": "94105",
    "picture": "url_to_picture",
    "propertyDescription": "Spacious and modern apartment",
    "purchasePrice": 500000,
    "purchasingClosingPrice": 500001,
    "afterRepairValue": 600000,
    "repairCosts": 20000,
    "cashPurchase": false,
    "loanAmount": 400000,
    "interestRate": 4.5,
    "pointsCharged": 2,
    "loanTerm": 30,
    "propertyTax": 5000,
    "propertyTaxPeriod": "month",
    "insurance": 1200,
    "insurancePeriod": "month",
    "repairsMaintenance": 1000,
    "vacancy": 800,
    "capitalExpenditures": 1500,
    "managementFees": 700,
    "electricity": 600,
    "gas": 300,
    "waterAndSewer": 400,
    "hoaFees": 250,
    "garbage": 100,
    "other": 200,
    "userId": "c14e0ff9-9eb6-496a-bc16-3c8030062f4e",
    "createdAt": "2024-07-08T21:21:12.686Z",
    "updatedAt": "2024-07-08T21:21:12.686Z"
}
*/

/**
 * @api {put} /properties update a property
 * @apiName updateProperty
 * @apiGroup Property
 * @apiHeader {String} Authorization Bearer token.
 * 
 * 
 * @apiParam {UUID} id The property ID. （required）
 * @apiParam {UUID} userId The ID of the user who owns the property.（required）
 * @apiParam {String} streetAddress Street address of the property.（required）
 * @apiParam {String} [city] City of the property.
 * @apiParam {String} [state] State of the property.
 * @apiParam {String} [zipcode] Zip code of the property.
 * @apiParam {TEXT} [picture] Picture base64 string.
 * @apiParam {String} [propertyDescription] Description of the property.
 * @apiParam {Integer} purchasePrice Purchase price of the property.（required）
 * @apiParam {Integer} purchasingClosingPrice Purchasing closing price of the property.（required）
 * @apiParam {Integer} afterRepairValue After repair value of the property.（required）
 * @apiParam {Integer} repairCosts Repair costs of the property.（required）
 * @apiParam {Boolean} [cashPurchase] Whether the property is a cash purchase.
 * @apiParam {Integer} [loanAmount] Total loan amount for the property（required）
 * @apiParam {Float} interestRate Interest rate for the loan per year.（required）
 * @apiParam {Integer} loanTerm Loan term in months.（required）
 * @apiParam {Integer} pointsCharged points charged.
 * @apiParam {Integer} propertyTax Property tax amount.（required）
 * @apiParam {String} propertyTaxPeriod Property tax period. 'month','quarter', 'half-year', 'annual'（required）
 * @apiParam {Integer} insurance insurance amount.（required）
 * @apiParam {String} insurancePeriod insurance period. 'month','quarter', 'half-year', 'annual'（required）
 * @apiParam {Integer} [repairsMaintenance] Repairs and maintenance cost per year.
 * @apiParam {Integer} [vacancy] Vacancy cost per year.
 * @apiParam {Integer} [capitalExpenditures] Capital expenditures cost per year.
 * @apiParam {Integer} [managementFees] Management fees per year.
 * @apiParam {Integer} [electricity] Electricity cost per month.
 * @apiParam {Integer} [gas] Gas cost per month.
 * @apiParam {Integer} [waterAndSewer] Water and sewer cost per month.
 * @apiParam {Integer} [hoaFees] HOA fees per month.
 * @apiParam {Integer} [garbage] Garbage cost per month.
 * @apiParam {Integer} [other] Other costs per month.
 * 
 * @apiSuccessExample {json} Success-Response:
 *  HTTP/1.1 200 OK
{
    "id": "0435aaf8-71b5-4b42-a4a1-9bf52b510089",
    "streetAddress": "123 Main St",
    "city": "San Francisco",
    "state": "CA",
    "zipcode": "94105",
    "picture": "url_to_picture",
    "propertyDescription": "Spacious and modern apartment",
    "purchasePrice": 500000,
    "purchasingClosingPrice": 500001,
    "afterRepairValue": 600000,
    "repairCosts": 20000,
    "cashPurchase": false,
    "loanAmount": 400000,
    "interestRate": 4.5,
    "pointsCharged": 2,
    "loanTerm": 30,
    "propertyTax": 5000,
    "propertyTaxPeriod": "month",
    "insurance": 1200,
    "insurancePeriod": "month",
    "repairsMaintenance": 1000,
    "vacancy": 800,
    "capitalExpenditures": 1500,
    "managementFees": 700,
    "electricity": 600,
    "gas": 300,
    "waterAndSewer": 400,
    "hoaFees": 250,
    "garbage": 100,
    "other": 200,
    "userId": "c14e0ff9-9eb6-496a-bc16-3c8030062f4e",
    "createdAt": "2024-07-08T21:21:12.686Z",
    "updatedAt": "2024-07-08T21:21:12.686Z"
}
 */

/**
 * @api {delete} /properties/ delete the property by id
 * @apiName deleteProperty
 * @apiGroup Property
 * @apiHeader {String} Authorization Bearer token.
 * 
 * @apiParam {UIUD} id property's unique ID
 * 
 *  * @apiSuccessExample {json} Success-Response:
 *  HTTP/1.1 204 No Content
{}
*/
const express = require('express');
const router = express.Router();
const propertyController = require('../controllers/propertyController');
// add JWT authentication here
const authenticateToken = require('../middlewares/authenticateToken');

// create a new property
router.post('/properties', authenticateToken, propertyController.createProperty);
// get all properties with the user
router.get('/properties/', authenticateToken, propertyController.getAllProperties);
// get the property by id
router.get('/properties/getPropertyById/', authenticateToken, propertyController.getPropertyById);
// update the property
router.put('/properties/', authenticateToken, propertyController.updateProperty);
// delete the property
router.delete('/properties/', authenticateToken, propertyController.deleteProperty);

module.exports = router;
