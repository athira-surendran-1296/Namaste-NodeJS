const http = require("node:http"); // same as --> require("http")

const server = http.createServer(function (req, res) {
    if(req.url === "/getSecret") {
        return res.end("There is no secret");
    }
    res.end("Hello world!!");
});

server.listen("7777");