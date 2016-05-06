
### client-events-fetcher 
playing around with socket.io (using node v5.0.0 and express 4) 

#### client: 
 index.html - simple demo testApp which contains 3 <button> elements and requires the event-fetcher module  
 event-fetcher.js - currently just listens to click events on any button element and emit btn clicked to the ws-server

#### server:
  socketEvents module - holds the socket.io custom event listeners for the client events

#### server.js: 
where the webSocket server (and http server) created 
on connection socket events gets registered 

```
io.on('connection', (socket) =>  { // connection never dies
  socketEvents(socket); // register socket events that will be pushed to clients
});
```




