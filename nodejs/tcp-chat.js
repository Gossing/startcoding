var net = require('net')
	, sockets = [];

var server = net.createServer(function(socket) {
	sockets.push(socket);
});

server.listen(8000);
console.log('TCP chat server is started.');