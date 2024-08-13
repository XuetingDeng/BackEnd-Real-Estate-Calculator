/**
 * @api {post} /reports Create or update a report
 * @apiName GenerateReport
 * @apiGroup Report
 * @apiHeader {String} Authorization Bearer token.
 * 
 * 
 * @apiParam {UUID} propertyId The property ID. (required)
 * @apiParam {UUID} userId The ID of the user . (required)
 * @apiParam {Float} monthlyCashFlow Monthly cash flow from the property.(required)
 * @apiParam {Float} incomePerMonth Monthly income from the property.(required)
 * @apiParam {Float} expensesPerMonth Monthly expenses related to the property.(required)
 * @apiParam {Float} cocRoi Cash on cash return on investment.(required)
 * @apiParam {Float} fiveYearAnnualizedReturn Five-year annualized return on investment.(required)
 * @apiParam {Float} mortgagePayment Monthly mortgage payment.(required)
 * @apiParam {Float} noi Net operating income.(required)
 * @apiParam {Float} proFormaCapRate Pro forma capitalization rate.(required)
 * 
 * @apiSuccessExample {json} Success-Response:
 *  HTTP/1.1 200/201 OK
{
    "message": "Report updated successfully",
    "report": {
        "id": "a03d2d71-20a5-4e9c-9821-b3e8a17a29b9",
        "propertyId": "d6b27dc8-36bd-4813-83e6-8f8c97bb3d28",
        "userId": "56154080-b910-4661-babc-f46cc9529831",
        "monthlyCashFlow": 23664.925427363123,
        "incomePerMonth": 33333.333333333336,
        "expensesPerMonth": 7641.666666666667,
        "cocRoi": 5.5660338978443455,
        "fiveYearAnnualizedReturn": 1.2162108970560137,
        "mortgagePayment": 2026.7412393035431,
        "noi": 308300,
        "proFormaCapRate": 6.166,
        "createdAt": "2024-07-20T03:46:22.874Z",
        "updatedAt": "2024-07-20T03:50:06.824Z"
    }
}
 */

/**
 * @api {get} /reports/ Retrieve all reports according to userId
 * @apiName getReportsByUserId
 * @apiGroup Report
 * @apiHeader {String} Authorization Bearer token.
 * 
 * @apiParam {UIUD} id User's unique ID
 * 
 *  * @apiSuccessExample {json} Success-Response:
 *  HTTP/1.1 200 OK
[
    {
        "id": "3c20b5e7-372c-4e2a-b961-72bde2af7239",
        "propertyId": "62ea6310-a074-473a-8c2a-bf1963746818",
        "userId": "56154080-b910-4661-babc-f46cc9529831",
        "monthlyCashFlow": -5410.074572636875,
        "incomePerMonth": 5000,
        "expensesPerMonth": 8383.333333333332,
        "cocRoi": -10.471095187208165,
        "fiveYearAnnualizedReturn": -14.981605778883257,
        "mortgagePayment": 2026.7412393035431,
        "noi": -40599.999999999985,
        "proFormaCapRate": -8.119999999999997,
        "createdAt": "2024-07-20T03:26:13.807Z",
        "updatedAt": "2024-07-20T03:26:13.808Z"
    },
    {
        "id": "45c104e4-8d28-4702-a38f-648d9ec1b246",
        "propertyId": "d6b27dc8-36bd-4813-83e6-8f8c97bb3d28",
        "userId": "56154080-b910-4661-babc-f46cc9529831",
        "monthlyCashFlow": 23664.925427363123,
        "incomePerMonth": 33333.333333333336,
        "expensesPerMonth": 7641.666666666667,
        "cocRoi": 5.5660338978443455,
        "fiveYearAnnualizedReturn": 1.2162108970560137,
        "mortgagePayment": 2026.7412393035431,
        "noi": 308300,
        "proFormaCapRate": 6.166,
        "createdAt": "2024-07-20T03:50:06.806Z",
        "updatedAt": "2024-07-20T03:50:06.806Z"
    }
]
*/

/**
 * @api {get} /reports/getReportByPropertyId Retrieve the report by PropertyId
 * @apiName getReportByPropertyId
 * @apiGroup Report
 * @apiHeader {String} Authorization Bearer token.
 * 
 * @apiParam {UIUD} PropertyId
 * 
 *  * @apiSuccessExample {json} Success-Response:
 *  HTTP/1.1 200 OK
    {
        "id": "45c104e4-8d28-4702-a38f-648d9ec1b246",
        "propertyId": "d6b27dc8-36bd-4813-83e6-8f8c97bb3d28",
        "userId": "56154080-b910-4661-babc-f46cc9529831",
        "monthlyCashFlow": 23664.925427363123,
        "incomePerMonth": 33333.333333333336,
        "expensesPerMonth": 7641.666666666667,
        "cocRoi": 5.5660338978443455,
        "fiveYearAnnualizedReturn": 1.2162108970560137,
        "mortgagePayment": 2026.7412393035431,
        "noi": 308300,
        "proFormaCapRate": 6.166,
        "createdAt": "2024-07-20T03:50:06.806Z",
        "updatedAt": "2024-07-20T03:50:06.806Z"
    }
*/
const express = require('express');
const router = express.Router();
const reportController = require('../controllers/reportController');
// add JWT authentication here
// const authenticateToken = require('../middlewares/authenticateToken');

// create or update a new report
router.post('/reports', reportController.generateReportController);
// get all reports with the user
router.get('/reports/', reportController.getReportsByUserId);
// get the report by propertyId
router.get('/reports/getReportByPropertyId', reportController.getReportByPropertyId);

module.exports = router;