const http = require("http"); //import an HTTP node modules
const url = require("url"); //url module 
const fs = require('fs'); //file system module 

//create server
const server =
    http.createServer(
        function(req, res) {
            // console.log(req);
            // res.write("Hello Nelson, Welcome to Node Server Project")
            // res.end();


            //get the path name
            const parsedUrl = url.parse(req.url);
            const fileName = parsedUrl.pathname !== "/" ? `.${parsedUrl.pathname}.html`;

            fs.readFile(fileName, function(error, data) {
                if (data) {
                    res.write(data);
                    res.end();
                } else {

                    res.write("Page Not Found");
                    res.end();

                }


            });

        }

    );

//Listen for requests 
server.listen(5000);

//server will be running on the ports:
//localhost:5000 - index.html
//localhost:5000/about = about.html//localhost:5000
//localhost:5000/contact =contact.html