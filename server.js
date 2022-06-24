//Using Express to Create Server 
const express = require("express"); //import express
const server = express();
const PORT = 5000;


server.use(express.static('public'));

server.get("/", function(req, res) {
    res.send("Welcome to Nelson's Express Server");

});




server.listen(PORT, function() {
    return console.log(`Server is listening on port: ${PORT}`);
});