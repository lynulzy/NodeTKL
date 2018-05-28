var server = require('./server');
var router = require('./router');
//Start the server.
console.log(router.route);
server.start(router.route);