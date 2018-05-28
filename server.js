var http = require('http');
var url = require('url');
const port = 3000;
function start (route) {
    function onRequest (request, response) {
        var pathName = url.parse(request.url).pathname;
        console.log("Request for [" + pathName + "] received.");
        route(pathName);
        response.writeHead(200, {"Content-Type": "text/plain"});
        response.write("hello");
        response.end();
    }
    http.createServer(onRequest).listen(port);
    console.log("Server started");
}
exports.start = start;