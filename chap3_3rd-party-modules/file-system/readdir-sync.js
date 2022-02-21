const fs = require('fs');
fs.readdirSync('./', (err, files) => {
    if (err) {
        console.log('We got this error:', err);
    } else {
        console.log('List of files are: ', files);
    }
});
console.log('Synchronous Function');