process.nextTick(function() {
	console.log('was called in nextTick.');
});

console.log('This message is output first.');