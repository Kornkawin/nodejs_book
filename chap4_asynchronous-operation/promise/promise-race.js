/* 
    Promise.race([promise1, promise2, ...])

    returns a promise that fulfills or rejects 
    as soon as one of the promises in an iterable 
    fulfills or rejects, with the value or 
    reason from that promise.

    (return the promise that finish first in an iterable)
*/
const myPromise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('The first route'); // 4
        resolve(1)
    }, 1000);
});
const myPromise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('The second route'); // 2
        resolve(2);
    }, 0);    
});
console.log('run Promise.all()') // 1
Promise.race([myPromise1, myPromise2])
    .then((res) => {
        console.log(res); // 3
    });
