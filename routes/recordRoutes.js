const express = require('express')
const router = express.Router()
const recordController = require('../controllers/recordController')
const auth = require('../middleware/auth')

router.post('/post-data', auth, recordController.createDataRecord)

module.exports = router