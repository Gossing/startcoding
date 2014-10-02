var fs = require('fs');

fs.rename('./test.txt', './demo.txt', function(err) {
	if (err) throw err;
	console.log('changed.');
});