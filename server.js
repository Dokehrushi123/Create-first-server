const http = require("http");

const port = 8081;

http
    .createServer((require, response) => {  
        //callback function
        response.writeHead(200, { "Content-Type": "text/html" });
        response.write("<h1>Hello, this is from my server</h1>")
        response.end();
    })
    .listen(port, () => {
        //callback function
        console.log(`Nodejs server started on port ${port}`);
    });

//http://Localhost:8081