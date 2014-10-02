var net = require('net');

var server = net.createServer(function(socket) {
	console.log('Connected to server.');
	socket.on('end', function() {
	console.log('Disconnected from server.');
	});

	socket.write('Hello\r\n');
});

server.listen(8124, function() {
	console.log('The server is connected to port %d.', server.address().port);
});