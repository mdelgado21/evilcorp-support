const { MongoDB } = require('./mongodb');
var app = require('http').createServer();
var io = (module.exports.io = require('socket.io')(app));

const PORT = process.env.PORT || 3231;
const SocketManager = require('./SocketManager');

MongoDB.connectDB(async err => {
  if (err) throw err;
  io.on('connection', SocketManager);
  app.listen(PORT, () => {
    console.log(PORT, 'Connected to port' + PORT);
  });
});

process.on('exit', () => {
  MongoDB.disconnectDB();
});
