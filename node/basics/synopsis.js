var http = require('http');

var listener = function(request, response) {
    var headers = {
        'Content-type': 'text/plain'
    };

    response.writeHead(200, headers);
    response.end('Hello world\n');
}

var server = http.createServer(listener);

server.listen(80);

console.log('server running at http://localhost:80/');
