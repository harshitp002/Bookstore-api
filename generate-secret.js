const crypto = require('crypto');

const secret = crypto.randomBytes(32).toString('hex'); // this 32 can be changed
console.log('JWT Secret:', secret );


// for run
// node generate-secret.js

// use directly in terminal
// node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
