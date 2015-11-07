var local = 'different from browsers global scope';

global.some = 'this will be available to all modules';

// global obj common props:
// process, console, require

console.log('global process?', process == global.process);

console.log('modules cache:', require.cache);
console.log('resolve module path:', require.resolve('./filesystem.js'));

console.log('this module obj:', module);
console.log('this module exports obj:', exports);

console.log('this filename:', __filename);
console.log('this directory name:', __dirname);

// common global methods:

setTimeout(function() {
    console.log('run this once after', 2000, 'ms');
}, 2000);

setInterval(function() {
    console.log('run this every', 1000, 'ms');
}, 1000);
