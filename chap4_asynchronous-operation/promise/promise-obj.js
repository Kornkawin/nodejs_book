const p = new Promise((resolve, reject) => {
    // Async Operation
    setTimeout(() => {
        // complete
        const result = {id:1, name:'Kornkawin'};
        resolve(result);
        
        // failure
        // reject(new Error('Error 404 not found'));
    }, 2000);
});

console.log('Begin Asynchronous operation.')
p.then((result) => {
    console.log('This is result: ', result);
}).catch((err) => {
    console.log(err.message);
});
console.log('After Asynchronous Operation.')