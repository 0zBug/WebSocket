const WebSocketServer = require('ws');

const wss = new WebSocketServer.Server({ port: process.env.PORT || 8080 })

wss.on("connection", ws => {
    console.log("new client connected");

    ws.on("message", data => {
        console.log(`Client has sent us: ${data}`)

        wss.clients.forEach(function each(client) {
            client.send(`${data}`);
        });
    });

    ws.on("close", () => {
        console.log("the client has connected");
    });

    ws.onerror = function () {
        console.log("Some Error occurred")
    }
});

console.log("The WebSocket server is running on port 8080");
