var fs = require('fs');

// all methods have sync & async versions

fs.renameSync('./events.js', './EVENT.S.JS');

var stats = fs.statSync('./EVENT.S.JS');
console.log('EVENT.S.JS stats:', JSON.stringify(stats));
console.log('is file?', stats.isFile());
console.log('is dir?', stats.isDirectory());

fs.rename('./EVENT.S.JS', './events.js', function(err) {
    if (err) console.error(err.message);

    // with sync versions, calls must be chained
    fs.stat('./events.js', function(err, stats) {
        if (err) console.error(err.message);
        console.log('events.js stats:', JSON.stringify(stats));
    });
});

fs.chmod('events.js', '777', function(err){
    if (err) console.error(err.message);
});

fs.link('events.js', 'events.link.js', function(err){
    if (err) console.error(err.message, ' tres');
});

// may not unlink, 'cause it's async (order not guaranteed)
fs.unlink('events.link.js', function(err){
    if (err) console.error(err.message);
});

fs.mkdir('temp', function(err){
    if (err) console.error(err.message);
});

// 'createWriteStream' is recommended instead of 'createFile'
fs.writeFile('temp/foo.bar', 'override previous file content', function(err){
    if (err) console.error(err.message);
});

fs.appendFile('temp/foo.bar', 'append to previous content', function(err){
    if (err) console.error(err.message);
});

// may not read, 'cause it's async (order not guaranteed)
// 'createReadStream' is recommended instead of 'readFile'
fs.readFile('temp/foo.bar', {encoding: 'utf8'}, function(err, data) {
    if (err) console.error(err.message);
    console.log('file content:', data);
});

fs.readdir('temp', function(err, files){
    if (err) console.error(err.message);
    console.log('files in directory', files);
});

// no delete method
fs.unlink('temp/foo.bar', function(err){
    if (err) console.error(err.message);
});

// may not remove, 'cause it's async (order not guaranteed)
fs.rmdir('temp', function(err){
    if (err) console.error(err.message);
});

// open... (see streams)
