const Report = require('../models/Report');
const reportService = require('../services/reportService');

const generateReportController = async (req, res) => {
    const { propertyId } = req.body;

    try {

        const report = await reportService.generateReport(propertyId);
        res.status(200).json({
            message: 'Report generated successfully',
            report
        });

    } catch (error) {
        res.status(500).json({
            message: 'Failed to generate report',
            error: error.message
        });
    }
};


const getReportByPropertyId = async (req, res) => {
    try {
        const { propertyId } = req.query;

        if (!propertyId) {
            return res.status(400).json({ message: 'Property ID is required' });
        }

        const report = await Report.findOne({
            where: { propertyId },
        });

        if (!report) {
            return res.status(404).json({ message: 'Report not found' });
        }

        return res.status(200).json(report);
    } catch (error) {
        console.error('Error fetching report:', error);
        return res.status(500).json({ message: 'Failed to fetch report', error: error.message });
    }
};

const getReportsByUserId = async (req, res) => {
    try {
        const { userId } = req.query;

        if (!userId) {
            return res.status(400).json({ message: 'Property ID is required' });
        }

        const report = await Report.findAll({
            where: { userId },
        });

        if (!report) {
            return res.status(404).json({ message: 'Report not found' });
        }

        return res.status(200).json(report);
    } catch (error) {
        console.error('Error fetching report:', error);
        return res.status(500).json({ message: 'Failed to fetch report', error: error.message });
    }
};


module.exports = {
    generateReportController,
    getReportByPropertyId,
    getReportsByUserId
};