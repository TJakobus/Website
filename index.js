const WebS = require("ws");
const wss = new WebS.Server({port:25565});

wss.on("connection", ws => {
    console.log("New client connected!");
});