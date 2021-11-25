const http = require("http");
const express = require("express");

const app = express();

//create server
const server = http.createServer(app);
const port = process.env.PORT || 3000;

//listen server
server.listen(port,()=>{
    console.log(`Server started at ${port}`);
});

//scoket.io setup
const io =  require("socket.io")(server);
io.on("connection",(socket)=>{
    console.log(socket.id);
});

