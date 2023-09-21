const db = require('../config/dbconfig');

async function createDevice(device) {
  try {
    const [result] = await db.execute(
      `INSERT INTO Device (device_id, application_id, device_name, latitude, longitude, altitude) 
       VALUES (?, ?, ?, ?, ?)`,
      [
        device.device_id,
        device.application_id,
        device.device_name,
        device.latitude,
        device.longitude,
        device.altitude
      ]
    )
    return {success:"true"}
  } catch (error) {
    throw new Error('Failed to insert device.')
  }
}

module.exports = {
  createDevice,
}
