process.on('uncaughtException', function(err) {
	console.log('exception: ' + err);
});

setTimeout(function() {
	console.log('This code is executed.');
}, 500);

// 존재하지 않는 함수 실행
nonExistentFunction();

console.log('This code is not executed.');