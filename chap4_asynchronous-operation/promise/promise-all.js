/* 
    collect result from Async function to array
    by Promise.all([promise1, promise2, ...])

*/
const myPromise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('The first route'); // 3
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
Promise.all([myPromise1, myPromise2])
    .then((res) => {
        console.log(res); // 4
    });
