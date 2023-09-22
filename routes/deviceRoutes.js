const express = require('express')
const router = express.Router()
const deviceController = require('../controllers/deviceController') 
const auth = require('../middleware/auth')


router.post('/devices', auth, deviceController.createDevice)

module.exports = router
