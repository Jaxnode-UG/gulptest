// Example from https://github.com/substack/stream-handbook
// This is even better!
var http = require('http');
var fs = require('fs');
var oppressor = require('oppressor');

var server = http.createServer(function (req, res) {
    var stream = fs.createReadStream(__dirname + '/README.md');
    stream
		.pipe(oppressor(req))
		.pipe(res)
		//.pipe(process.stdout);
});
server.listen(3000);