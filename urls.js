var url = require('url');

var str = 'http://user:pass@host.com:8080/p/a/t/h?query=string#hash';

console.log('original:', str);

var parsed = url.parse(str);

console.log('parsed:', parsed);

// parse using querystring module
console.log('parsed without querystring:', parsed.query)
console.log('parsed using querystring:', url.parse(str, true).query);

var obj = {
    protocol: 'https:',
    host: 'hostname.org',
    query: {
        arg1: 'val1',
        arg2: 'val2'
    },
    pathname: '/path/subpath'
};

console.log('formatted:', url.format(obj));
