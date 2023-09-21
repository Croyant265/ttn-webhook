const express = require('express')
const router = express.Router()
const dataRecordController = require('../controllers/dataRecordController')

router.post('/data-records', dataRecordController.createDataRecord)

module.exports = router