const http = require("http"); //import an HTTP node modules
const url = require("url"); //url module 
const fs = require('fs'); //file system module to access the files
const { isAbsolute } = require('path');

//create server
const server =
    http.createServer(
        function(req, res) {
            //get the path name
            const parsedUrl = url.parse(req.url);
            let fileName;

            if (parsedUrl.pathname !== "/") {
                fileName = `.${parsedUrl.pathname}.html`;
            } else {
                fileName = './index.html';
            }

            fs.readFile(fileName, function(error, data) {
                if (data) {
                    res.write(data);
                    res.end();
                } else {

                    fs.readFile('./404.html', function(error, data) {
                        res.write(data);
                        res.end();

                    })

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