var fs = require('fs');

// Readable streams have 2 modes:
// - paused mode (default): 'readable.read()' must be called explicitly to get chunks
// - flowing mode: data is read to 'data' event listeners or 'pipe' destinations

var paused = fs.createReadStream('./data.json');

// encode data bytes read to UTF-8 strings
paused.setEncoding('utf8');

paused.on('readable', function() {
    console.log('reading on paused mode:', paused.read());
});

// switching to flowing mode (|):
// - add a 'data' event listener
// - pipe a writable stream
// - call 'readable.resume()' (chunks can be lost)

var flowing = fs.createReadStream('./data.json');

flowing.on('data', function(chunk) {
    console.log('reading on flowing mode:', chunk);
});

flowing.on('end', function() {
    console.log('reading on flowing mode: ended');
});

// switching back to paused mode (&):
// - remove 'data' listeners
// - unpipe writable streams'
// - call 'readable.pause()'

paused.on('error', function(err) {
    console.log('error receiving data', err.message);
});

// common readable streams:
// - http responses, on the client
// - http requests, on the server
// - fs read streams
// - 'process.stdin'

var piping = fs.createReadStream('./data.json');

piping.pipe(process.stdout);

// common writable streams:
// - http request, on the client
// - http responses, on the server
// - fs write streams
// - 'process.stdout' & 'process.stderr'

var writable = fs.createWriteStream('./logs/dummy.log');

// writings to writable streams are buffered
writable.write('writing to writable\n', 'utf8', function() {
    console.log('data flushed from buffer');
});

// 'drain' event is triggered when writable buffer becomes empty
writable.on('drain', function() {
    console.log('writable buffer is empty again');
});

writable.end('the end', 'utf8', function() {
    console.log('indicates that writing is over');
});

writable.on('error', function(err) {
    console.log('error while writing', err.message);
});
