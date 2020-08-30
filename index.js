var http = require('http');
const _ = require("lodash")

var server = http.createServer(function(request, response) {
    let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let c1 = _.slice(nums, 2, 6);
console.log(c1);

let c2 = _.slice(nums, 0, 8);
console.log(c2);


    response.writeHead(200, { "Content-Type": "application/json" });
    response.end("<html><body><h1>Hello World welcome to Azure world apps!</h1></body></html>");

    response.end(c1);
    response.end(c2);
});
 
var port = process.env.PORT || 1337;
server.listen(port);

console.log("Server running at http://localhost:%d", port);