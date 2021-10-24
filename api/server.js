const express = require('express')
const helmet = require('helmet')
const cors = require('cors')
const app = express()
const server = require( 'http' ).Server( app );

app.use(express.json())
app.use(helmet())
app.use(cors())


module.exports = server