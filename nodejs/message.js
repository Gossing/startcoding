var cluster = require('cluster');
var http = require('http');
var numReqs = 0;

if (cluster.isMaster) {
	// create one worker
	for ( i = 0; i < 2; i++) {
		var worker = cluster.fork();

		worker.on('message', function(msg) {
			if (msg.cmd && msg.cmd == 'notigyRequest') {
				numReqs++;
			}
		});
	}

	setInterval(function() {
		console.log("numReqs =", numReqs);
	}, 1000);
} else {
	http.Server(function(req, res) {
		res.writeHead(200);
		res.end("hello world\n");
		process.send({ cmd: 'notifyRequest' });
	}).listen(8000);
}
