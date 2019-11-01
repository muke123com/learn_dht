const crypto = require('crypto');
const fs = require('fs');

const hash = crypto.createHash('md5')
// hash.update('1');
// console.log(hash.digest('hex'));

const randomId = crypto.randomBytes(20)
hash.update(randomId);

let nid = hash.digest('hex');
console.log(nid);
console.log(nid.slice(0, 15));
console.log(nid.slice(15));



