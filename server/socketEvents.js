'use strict';


const logger = require('log4js').getLogger('socketEvents');


/**
 * @desc holds the socket.io custom event listeners for the client events
 * each event will emit back an object to the client
 * @param socket
 */
const socketEvents = (socket) => {

    socket.on('btn clicked', (data) => {
        logger.info('new message from: ' + data.btn);
        // we tell the client to execute 'btn clicked'
        socket.broadcast.emit('btn clicked', {
            btn: socket.btn,
            message: data
        });
    });

};

module.exports = socketEvents;