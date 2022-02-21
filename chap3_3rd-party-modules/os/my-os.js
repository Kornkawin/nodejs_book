const os = require('os');
let freeMemory = os.freemem();
console.log(`Free Memory (RAM): ${freeMemory}`);
let totalMemory = os.totalmem();
console.log(`Total Memory (RAM): ${totalMemory}`);
let user = os.userInfo();
console.log(user);