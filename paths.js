var path = require('path');

console.log('normalized:', path.normalize('/dir//../file-at-root.js'));
console.log('joined:', path.join('/dir/', '.', '/subdir', '/..', 'subdir2'));

// resolve absolute path to current directory
console.log('resolved:', path.resolve('foo'));

// resolve absolute path with arguments (until it finds one rooted)
console.log('resolved:', path.resolve('unrooted', '/rooted', 'foo'));

console.log('is absolute?', path.isAbsolute('foo/bar'));

console.log('relative:', path.relative('/from/dir1/subdir1/', '/to/dir2'));

console.log('directory name:', path.dirname('/dir1/subdir1/file.ext'));
console.log('basename:', path.basename('/dir1/subdir1/file.ext'));
console.log('extension:', path.extname('/dir1/file.ext'));
console.log('parsed:', path.parse('/dir1/subdir1/file.ext'));

console.log('separator:', path.sep);
console.log('delimiter:', path.delimiter);
