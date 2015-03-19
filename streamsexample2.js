// Example from https://github.com/substack/stream-handbook
// This is a bad.

var http = require('http');
var fs = require('fs');

var server = http.createServer(function (req, res) {
	fs.readFile(__dirname + '/README.md', function (err, data) {
		res.end(data);
	});
});
console.log("Starting HTTP on 127.0.0.1:3000");
server.listen(3000);