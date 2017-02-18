let socketIO = require('socket.io');
let http = require('http');
const colors = require('colors');







class Socket{
  constructor(socket , config){
    socket.on('reload' ,function(){
      console.log("realoding");
      socket.emit('reload');
      socket.broadcast.emit('reload');
    });
    socket.on('kill' ,function(){
      socket.emit('kill');
      socket.broadcast.emit('kill');
    });
    socket.on('process-connected', function(who){
      console.log(`[PROCESS] '${who.name.toUpperCase()}:${who.pid}' connected`.yellow.bold)
    });
    socket.on('stout-data' ,function(msg){
      console.log(`[STDIO]`.yellow.bold ,msg)
    });
  }
}


module.exports = function(config){
  let server = http.createServer(function(){});

  console.log(`Build server started | localhost @${config.system.port}`.cyan.bold );
  let io = socketIO(server);
  server.listen(config.system.port);

  io.on('connection' ,function(sock){
    new Socket(sock , config);
  });
  if(config.processes.firebase.enable){
    io.of('/firebase').on('connection' , function(socket){
      new FirebaseEvents(socket, config)
    });
  }
}
