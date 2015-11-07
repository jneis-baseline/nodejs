// 'process' is a global obj

// 'process.stdin' - readable stream
// 'process.stdout' & 'process.stderr' - writable streams

console.log('command-line arguments:', process.argv);

console.log('executable path:', process.execPath);
console.log('executable arguments:', process.execArgv);

// current working directory
console.log(process.cwd());

// changes current working directory
process.chdir('/workspace/basics/logs');

console.log(process.cwd());

console.log('env:', process.env);

// current time in [seconds, nanoseconds]
console.log('current time:', process.hrtime());

// same as 'require.main'
console.log('main module:', process.mainModule);
