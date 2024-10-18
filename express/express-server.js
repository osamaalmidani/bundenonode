const express = require("express");
const app = express();
const { Server } = require("socket.io");

app.get("/", (req, res) => {
  res.send("Hello from Express WebSocket server!");
});

const httpServer = app.listen(3001, () => {
  console.log("Express server listening on port 3001");
});

const io = new Server(httpServer);

io.on("connection", (socket) => {
  console.log("WebSocket connection established");

  socket.on("message", (data) => {
    console.log("Received message:", data);
    socket.emit("message", "Message received from Express server!");
  });

  socket.on("disconnect", () => {
    console.log("WebSocket connection closed");
  });
});
