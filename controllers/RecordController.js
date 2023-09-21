let { record } = require('../models/record')

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
    result = await record.createDataRecord(dataRecord)
    if(result.sucess === "true"){
      console.log('Record inserted successfully')
    }

  } catch (error) {
    console.log(error)
    next(error)
  }
}

module.exports = {
  createDataRecord,
}
