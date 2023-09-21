const db = require('../config/dbconfig')

async function createDataRecord(dataRecord) {
  try {
    const [result] = await db.execute(
      `INSERT INTO DataRecord (device_id, BatV, Temp_Black, Temp_Red, Temp_White, received_at) 
       VALUES (?, ?, ?, ?, ?, ?)`,
      [
        dataRecord.device_id,
        dataRecord.BatV,
        dataRecord.Temp_Black,
        dataRecord.Temp_Red,
        dataRecord.Temp_White,
        dataRecord.received_at
      ]
    );
    return {success:"true"}
  } catch (error) {
    console.log(error)
    throw new Error('Failed to insert data record.')
  }
}

module.exports = {
  createDataRecord,
}
