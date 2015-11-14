var cpus = require('os').cpus();
var cluster = require('cluster');
var http = require('http');

if (cluster.isMaster) {

    console.log('cluster master', process.pid, 'ready');
    
    var forked = function(worker, code, signal) {
        console.log('worker', worker.process.pid, 'created');
    };

    cluster.on('fork', forked);

    for (cpu in cpus) {
        cluster.fork();
    }    

} else {

    var listener = function(request, response) {
        response.writeHead(200);
        response.end("hello world\n");
    };

    // child processes can share any tcp connection
    http.createServer(listener).listen(80);
}
