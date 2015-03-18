"use strict";

var http = require('http'),
	textHolder = "";

var httpOptions = {
	hostname: 'www.jaxnode.com'
};

var myRequest = http.request(httpOptions, function (response) {
	response.setEncoding('utf8');
	response.on('data', function (chunk) {
		console.log('receiving data.');
		textHolder += chunk;
	});
	response.on('end', function() {
		console.log('request has ended.');	
		console.log(textHolder);
	});
}).on('error', function(e) {
	console.log('problem with request: ' + e.message);
}).end();
	
