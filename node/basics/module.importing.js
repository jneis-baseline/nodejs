var me = require('./module.exporting.js');

console.log('imported prop:', me.prop);

me.fun();

var mc = require('./module.construction');

mc('exported').fun();

// if the exact filename is not found, 
// extensions .js, .json & .node will be tried
// .node files are compiled addon modules

var json = require('./data');
console.log('js obj:', json);
console.log('json: %j', json);

// required module paths
// - starting with '/': absolute path
// - starting with './' or '../': relative path
// - others: core or loaded from 'node_modules' packages

// requiring a folder as module:
// - with 'index.js' or 'index.node'
// - with a 'package.json'
// {"name": "same-as-folder-name", "main": "./some-script.js"}

// modules are cached after 1st time they're loaded
// so, to execute a module's code multiple times, a function must be exported
console.log('cache:', require.cache);

// 'module' object
console.log('refers to this module:', module);

// when a module is run directly from node ('node <module>'),
// instead of being required (through 'require(<module>)'):
console.log('require.main === module:', require.main === module);


