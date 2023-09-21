const express = require('express')
const router = express.Router()
const recordController = require('../controllers/recordController').default

router.post('/post-data', recordController.createDataRecord)

module.exports = router