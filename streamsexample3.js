// Example from https://github.com/substack/stream-handbook
// This is a bad.
var http = require('http');
var fs = require('fs');

var server = http.createServer(function (req, res) {
    var stream = fs.createReadStream(__dirname + '/README.md');
    stream.pipe(res);
});
console.log("Starting HTTP on 127.0.0.1:3000");
server.listen(3000);