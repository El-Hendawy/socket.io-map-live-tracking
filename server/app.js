const Express = require("express")();
var cors = require('cors');
const Http = require("http").Server(Express);
const Socketio =require("socket.io")(Http,{
    cors: {
      origin: '*',
    }
  });
const Markers = [];

Socketio.on("connection",socket =>{

    for(let i = 0; i > Markers.length ;i++ ){
        socket.emit("marker",Markers[i])
    }

    socket.on("marker", data => {
        Markers.push(data);
        Socketio.emit("marker",data)

    });
});

Http.listen(3000,()=>{
console.log('Listen At 3000');
});