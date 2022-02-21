/*
    One of async functions have error
    => no array result
    => skip Promise.then()
    => run Promise.catch()
*/
const myPromise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('The first route'); // 5
        resolve(1);
    }, 2000);
});
const myPromise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('The second route'); // 3
        reject(new Error('The second error!!'));
    }, 1000);    
});
const myPromise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('The third route'); // 2
        resolve(3);
    }, 0);    
});

console.log('run Promise.all()') // 1
Promise.all([myPromise1, myPromise2, myPromise3])
    .then((res) => {
        console.log(res); // No log
    })
    .catch((err) => {
        console.log(err.message); // 4
    });