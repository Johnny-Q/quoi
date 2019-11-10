var express = require("express");
var socket = require("socket.io");

var app = express();
var server = app.listen(8080, function(){
    console.log("listening on port 8080");
});

app.use(express.static("public"));
var io = socket(server);

io.on("connection", function(s){
    console.log("socket connected: "+s);
    s.on("q", (data)=>{
        io.sockets.emit("add", (data));
    });
});