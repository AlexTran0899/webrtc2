const express = require('express')
const helmet = require('helmet')
const cors = require('cors')
const app = express()
const stream = require('./videochat/video')
const server = require( 'http' ).Server( app );
const io = require( 'socket.io' )( server );

app.use(express.json())
app.use(helmet())
app.use(cors())


module.exports = server