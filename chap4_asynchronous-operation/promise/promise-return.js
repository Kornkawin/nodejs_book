const { resolve } = require("path/posix");

/* without promise */
const getStudentWithCallback = (id, callback) => {
    setTimeout(() => {
        const name = 'Kornkawin'
        callback({id: id, name: name});
    }, 2000);
};
getStudentWithCallback(1, (result) => {
    console.log(result);
});

/* with promise */
const getStudentWithPromise = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const name = 'Kornkawin';
            const result = {id: id, name: name}
            resolve(result);
        }, 2000);
    });
};
getStudentWithPromise(2)
    .then((res) => {
        console.log(res);
    });

/* promise with resolve and reject */
const getStudentWithPromiseWithReject = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let name; 
            //name = 'Kornakwin'; 
            if (name) {
                resolve({id: id, name: name});
            } else {
                reject(new Error('Cannot get the result'));
            };
        }, 2000);
    });  
};
getStudentWithPromiseWithReject(3)
    .then((res) => { 
        console.log(res);
    })
    .catch((err) => {
        console.log(err.message);
    });

/* promise.resolve() (static method) */
const myPromiseResolved = Promise.resolve({id: 4, name: 'Kornkawin'});
myPromiseResolved.then(res => console.log(res));

/* promise.reject() (static method) */
const myPromiseRejected = Promise.reject(new Error('You have got error'));
myPromiseRejected.catch(err => console.log(err.message));
