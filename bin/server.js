var http = require('http');
var url = require('url');
const port = 3000;
function start (route) {
    function onRequest (request, response) {
        var pathName = url.parse(request.url).pathname;
        var urlQuery = url.parse(request.url).query;
        console.log("Request for [" + pathName + "] received.");
        console.log("Url query" + urlQuery);
        route(pathName, response);
        // response.writeHead(200, {"Content-Type": "text/plain"});
        // response.write("hello");
        // response.end();
    }
    http.createServer(onRequest).listen(port);
    console.log("Server started port: " + port.toString());
}
exports.start = start;