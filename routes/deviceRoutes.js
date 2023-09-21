const express = require('express')
const router = express.Router()
const { deviceController } = require('../controllers/deviceController')


router.post('/devices', deviceController.createDevice)

module.exports = router
