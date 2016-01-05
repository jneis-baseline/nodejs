// console, or require('console')
// - console is a global object
// - output is sent to process.stdout or process.stderr
// - functions are sync for terminal, async for pipes

console.log('message', 'without', 'placeholders');

// formatting can be accomplished in the same way using require('utils')
console.log('%s %d %j', 'string', 1, {json: 'obj'}, {js: 'obj'});

console.info('same as console.log');

console.error('prints %s', 'to', 'stderr');

console.warn('same', 'as', 'console.error');

console.time('timer-name');
for (var i = 0; i < 100000000   ; i++) { ; }
console.timeEnd('timer-name');

console.trace('prints message', 'plus stack trace');

// in order to customize output:
var Console = console.Console;
var fs = require('fs');

var output = fs.createWriteStream('./logs/stdout.log');
var errorOutput = fs.createWriteStream('./logs/stderr.log');

var logger = new Console(output, errorOutput);
logger.log('simple logging %s', 'messages');
logger.error('error', 'logging');
