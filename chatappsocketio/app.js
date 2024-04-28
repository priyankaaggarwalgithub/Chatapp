const express = require("express");
const app = express();
const server = require("http").createServer(app);
const io = require("socket.io")(server, {});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

let amountofonlineusers = 1;
io.on("connection", (socket) => {
  socket.on("join", (param) => {
    console.log("User has joined");
    amountofonlineusers++;
    io.emit("Amount of Online Users", amountofonlineusers);
  });
  socket.on("message", (param) => {
    console.log("Message has been sent");
    io.emit("message", param);
  });
  socket.on("disconnect", (param) => {
    console.log("User has left the chat app");
    amountofonlineusers--;
    io.emit("amountofonlineusers", amountofonlineusers);
  });
});

server.listen(3000);
