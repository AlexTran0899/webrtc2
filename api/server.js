const app = require('express')();
const helmet = require('helmet');
const cors = require('cors');
const server = require('http').createServer(app);

const io = require('socket.io')(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"]
  }
})

app.use(helmet())
app.use(cors())

app.get('/', (req, res) => {
  res.send("server is running")
})

io.on('connection', (socket) => {
  socket.emit('me', socket.id)
  socket.on('disconnect', () => socket.broadcast.emit('callended'))
  socket.on('calluser', ({ userToCall, signalData, from, name }) => {
    io.to(userToCall).emit("calluser", { signal: signalData, from, name })
  })
  socket.on('answercall', (data) => {
    io.to(data.to).emit("callaccepted", data.signal)
  })
})



module.exports = app
