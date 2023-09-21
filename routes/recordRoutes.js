const express = require('express')
const router = express.Router()
const c = require('../controllers/recordController')

router.post('/post-data', recordController.createDataRecord)

module.exports = router