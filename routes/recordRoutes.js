const express = require('express')
const router = express.Router()
const recordController = require('../controllers/recordController')

router.post('/data-records', recordController.createDataRecord)

module.exports = router