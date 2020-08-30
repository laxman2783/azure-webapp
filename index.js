var http = require('http');

var server = http.createServer(function(request, response) {

    response.writeHead(200, { "Content-Type": "text/html" });
    response.end("<html><body><h1>Hello World welcome to Azure world apps!</h1></body></html>");

});
 
var port = process.env.PORT || 1337;
server.listen(port);

console.log("Server running at http://localhost:%d", port);