var server = require('./bin/server');
var router = require('./router');
//Start the server.
server.start(router.route);