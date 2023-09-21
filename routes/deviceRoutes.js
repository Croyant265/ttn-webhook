const express = require('express')
const router = express.Router()
const { c } = require('../controllers/deviceController')


router.post('/devices', deviceController.createDevice)

module.exports = router
