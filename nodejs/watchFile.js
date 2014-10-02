var fs = require('fs');

fs.watchFile('./example.txt'
	, {persistent: true, interval: 0}
	, function(curr, prev) {
	  console.log('Modification time of the current file: ' + curr.mtime);
	  console.log('Previous file modification time: ' + prev.mtime);
	}
);