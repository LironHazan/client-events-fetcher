$(function() {
  'use strict';

  // init socket.io client
  var socket = io();

  // Listen to click events on any button element and emit btn clicked to the ws-server
  $('button').bind( 'click', function handler(event) {
    console.log(event.currentTarget.innerText);
    socket.emit('btn clicked', {btn:event.currentTarget.innerText});
  });


  // Socket events
  // Whenever the server emits 'btn clicked' other clients will get a broadcast by the server
  socket.on('btn clicked', function (data) {
    console.log('got event from server ' + data.message.btn);
  });

});
