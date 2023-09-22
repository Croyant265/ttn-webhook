const basicAuth = require('express-basic-auth')

const username = process.env.AUTH_USERNAME
const password = process.env.AUTH_PASSWORD

const auth = basicAuth({
  users: { [username]: password },
  challenge: true, 
})

module.exports = auth
