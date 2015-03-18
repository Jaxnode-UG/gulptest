// Example from https://github.com/substack/stream-handbook
// This is a bad.

var http = require('http');
var fs = require('fs');

var server = http.createServer(function (req, res) {
	fs.readFile(__dirname + '/README.md', function (err, data) {
		res.end(data);
	});
});
server.listen(3000);