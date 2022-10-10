const express = require('express')

const router = express.Router()
const patientController = require('../../../controllers/api/v1/patient_controller')
const reportController = require('../../../controllers/api/v1/report_controller')
const { verifyToken } = require('../../../config/middleware')
const passport = require('passport')

router.post('/register', verifyToken, patientController.register)
router.post('/:id/createreport', verifyToken, reportController.create_report)
router.get('/:id/allreports', reportController.all_reports)

module.exports = router
