var http = require('http');

console.log('http methods available:', http.METHODS);
console.log('http status codes:', http.STATUS_CODES);

var server = http.createServer(function() {
    console.log('dummy listener automatically added to the request event');
});

server.on('close', function() {
    console.log('server shutdown');
});

server.on('clientError', function(err, socket) {
    console.log('client error:', err.message);
});

// another request listener
server.on('request', function(request, response) {
    console.log('request url:', request.url);

    // http.ServerResponse
    response.setHeader('Content-type', 'application/json');
    response.writeHead(200, {'Content-type': 'text/plain'});
    console.log(response.getHeader('Content-type'));

    response.end('response content');
});

// http.ClientRequest
var options = {
    hostname: 'localhost',
    port: 80,
    path: '/upload',
    method: 'POST',
    headers: {'Content-type': 'text/plain'}
};
var request = http.request(options, function(response) {
    response.on('data', function(chunk) {
        console.log('response chunk received:', chunk);
    });
    response.on('end', function() {
        console.log('response completely received');
    });
});

request.setTimeout(1000, function() {
    console.log('server did not respond');
});

request.write('sending content to post');
request.end();

// sets the GET method and calls end() automatically
http.get('http://localhost', function(response) {
    console.log('response status: ', response.statusCode);
});

// '0.0.0.0' is default hostname (accepts connections on any IP)
server.listen(80, '0.0.0.0');
