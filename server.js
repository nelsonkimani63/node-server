const express = require("express"); //import express
const server = express();

server.get("/", function(req, res) {
    res.send("Welcome to Express Server");

});



server.listen(5000, () => {
    console.log("Server is listening on port 5000")
});