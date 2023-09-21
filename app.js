const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const deviceRoutes = require('./routes/deviceRoutes')
const recordRoutes = require('./routes/recordRoutes')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())

app.use('/api', deviceRoutes)
app.use('/webhook', recordRoutes)

app.use((err, req, res, next) => {
  console.error(err)
})

const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
