var sticky = require('sticky-session'),
    http = require('http'),
    express = require('express'),
    socketIO = require('socket.io'),
    cluster = require('cluster'),
    port = process.env.PORT || 3000;
    socket_redis=require('socket.io-redis')


  var app = express(), io;

  server = http.Server(app);
  app.set('view engine','ejs');
  app.get('/', function (req, res) {
    console.log('send message by worker: ' + cluster.worker.id);
    res.render('abhi');
});

  io = socketIO(server);
  io.adapter(socket_redis({host:'localhost',port:'6379'}))
  io.on("connection",s=>{
      s.on("new",data=>{
          console.log("hey you")
      })
  })

  // Add your socket.IO connection logic here


if(!sticky.listen(server,port))
{
  server.once('listening', function() {
    console.log('Server started on port '+port);
  });

  if (cluster.isMaster) {
    console.log('Master server started on port '+port);
  } 
}
else {
    console.log('- Child server started on port '+port+' case worker id='+cluster.worker.id);
  }