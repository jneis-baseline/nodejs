var crypto = require('crypto');

// using ciphers
// console.log(crypto.getCiphers());

var cipher = crypto.createCipher('aes-256-cbc', 'password');
var decipher = crypto.createDecipher('aes-256-cbc', 'password');

var content = 'some content to encrypt';

var ciphered =
    cipher.update(content, 'utf8', 'base64') +
    cipher.final('base64');

var deciphered = 
    decipher.update(ciphered, 'base64', 'utf8') +
    decipher.final('utf8');

console.log('deciphered:', deciphered);
console.log('ciphered:', ciphered);

// using hash functions
// console.log(crypto.getHashes());

var sha1 = crypto.createHash('sha1');

sha1.update(content);

console.log('hashed:', sha1.digest('hex'));

// using signatures
var fs = require('fs');
var privateKey = fs.readFileSync('keys/privateKeyName.pem', 'utf8');
var publicKey = fs.readFileSync('keys/publicKeyName.pem', 'utf8');

var signer = crypto.createSign('RSA-SHA256');
var verifier = crypto.createVerify('RSA-SHA256');

signer.update(content);

var signature = signer.sign(privateKey, 'base64');

verifier.update(content);

var verified = verifier.verify(publicKey, signature, 'base64');

console.log('signature:', signature);
console.log('verified:', verified);
