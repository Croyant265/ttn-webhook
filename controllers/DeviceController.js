const Device = require('../models/deviceModel');

async function createDevice(req, res, next) {
  try {
    const { application_id, device_name, latitude, longitude, altitude } = req.body;
    const deviceId = await Device.createDevice({ application_id, device_name, latitude, longitude, altitude });
    res.status(201).json({ deviceId });
  } catch (error) {
    next(error);
  }
}

module.exports = {
  createDevice,
};
