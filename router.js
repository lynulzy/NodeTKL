var fs = require('fs');
function route(pathname, response) {
    // console.log(response);
    if(pathname = '/') {
        //index
        response.writeHead(200, {'Content-Type': 'text/html'});
        const indexFileName = 'index.vue'
        var htmlPath = __dirname + '/views/' + indexFileName;
        // console.log(typeof(htmlPath));
        fs.readFile(htmlPath, function(err,data) {
            if (err) {
                return console.log(err.message);
            }
            var htmlstr = data.toString();
            // console.log(htmlstr);
            response.write(htmlstr);
            response.end();
        });        
        return;
    }
    if(pathname = '/changeCode') {

        console.log(response.url.query());
    }
    response.writeHead({'Content-Type': 'text/plain'});
    response.write('This adress has not been implemented');
    response.end();
}
exports.route = route;