const express = require("express");
const http = require("http");
const { Server } = require("socket.io");

const app = express();
app.use(express.static(__dirname)); // serve static files, including index.html

const server = http.createServer(app);
const io = new Server(server);

io.on("connection", (socket) => {
    console.log("A user connected");

    socket.on("chat message", (msg) => {
        console.log("Message:", msg);

        io.emit("chat message", msg); // send to all clients
    });

    socket.on("disconnect", () => {
        console.log("User disconnected");
    });
});

server.listen(3000, () => {
    console.log("Server running on port 3000");
    console.log("Open http://localhost:3000 in your browser");
});




//frontend -> emit -> backend -> recieve -> on -> io.emit-> all clients->including the sender