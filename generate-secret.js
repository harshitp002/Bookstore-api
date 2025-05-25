const crypto = require('crypto');

const secret = crypto.randomBytes(32).toString('hex'); // this 32 can be changed
console.log('JWT Secret:', secret );


// for run
// node generate-secret.js