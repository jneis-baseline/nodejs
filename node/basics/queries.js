var qs = require('querystring');

var obj = {
    foo: 'bar',
    baz: ['qux', 'quux'],
    corge: ''
};

console.log('plain obj:', obj);

console.log('stringified:', qs.stringify(obj));

var separator = ';';
var assignment = ':';

console.log('stringified:', qs.stringify(obj, separator, assignment));

console.log('parsed:', qs.parse('corge=quux&qux=baz&qux=&bar=foo'));
console.log('parsed:', qs.parse('corge:quux;qux:baz;qux:;bar:foo', separator, assignment));
console.log('parsed:', qs.parse('corge:quux;qux:baz;qux:;bar:foo'));

console.log('escape:', qs.escape(' '), 'space,', qs.escape('"'), 'double-quote, etc');
