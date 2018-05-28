function route(pathname, response) {
    console.log(response);
    if(pathname = '/') {
        //index
        response.writeHead(200, {'Content-Type': 'text/html'});
        response.write('<h>这是一个网页标题</h>');
        response.end();
        return;
    }
    response.writeHead({'Content-Type': 'text/plain'});
    response.write('This adress has not been implemented');
    response.end();
}
exports.route = route;