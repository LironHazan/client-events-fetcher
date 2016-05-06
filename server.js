// Setup basic express server
'use strict';

const app = require('./server/app'); // the express app
const http = require('http');
const webSocket = require('socket.io'); //using websockets with socket.io
const socketEvents = require('./server/socketEvents'); // module for all custom ws events

const port = process.env.PORT || 3000;
// init and create the express server
const server = http.createServer(app);
const io = webSocket(server);


server.listen(port, () => {
  console.log('Server listening at port %d', port);
});

// can push data to the client instead of waiting for client request.
io.on('connection', (socket) =>  { // connection never dies
  socketEvents(socket); // register socket events that will be pushed to clients
});
