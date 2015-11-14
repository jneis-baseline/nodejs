var os = require('os');

console.log('temp dir:', os.tmpdir());
console.log('home dir:', os.homedir());
console.log('hostname:', os.hostname());
console.log('platform:', os.platform());
console.log('architecture:', os.arch());
console.log('memory:', os.totalmem());
console.log('free memory:', os.freemem());
console.log('cpus:', os.cpus().length);
console.log('eth interface:', os.networkInterfaces().eth0[0]);
