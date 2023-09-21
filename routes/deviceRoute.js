const express = require('express')
const router = express.Router()
const deviceController = require('../controllers/DeviceController')


router.post('/devices', deviceController.createDevice)

module.exports = router
