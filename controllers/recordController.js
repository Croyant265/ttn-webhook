const record = require('../models/record')

async function createDataRecord(req, res, next) {
  try {
    // Extract the required fields from the incoming JSON body.
    const {
      uplink_message: {
        decoded_payload: { BatV, Temp_Black, Temp_Red, Temp_White },
        received_at,
      },
      end_device_ids: { device_id },
    } = req.body

    // Create a data record object with the extracted fields.
    const dataRecord = {
      device_id,
      BatV,
      Temp_Black,
      Temp_Red,
      Temp_White,
      received_at,
    }
    const result = await record.createDataRecord(dataRecord)
    if(result.success === "true"){
      console.log('Record inserted successfully!')
    }
    res.status(200).json({ status: 'healthy' });

  } catch (error) {
    console.log(error)
    next(error)
  }
}

module.exports = {
  createDataRecord,
}
