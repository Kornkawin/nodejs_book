/* promise keyword */
const checkAuth = (id, pass) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const authData = 'gkertkerpkl[p'
            console.log('User authenticated');
            resolve({id:id, pass:pass, auth:authData});
            // reject(new Error('creditials not found!!'))
        }, 1000);
    });
};
/* promise keyword */
const getStudent = (auth) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = {name: 'Kornkawin', permission: 'admin'};
            // resolve(data);
            reject(new Error('permission is denied!!'))
        }, 2000);
    });
};

/* async and await keywords */
const getTheResult = async () => {
    let auth;
    let data;

    try {
        auth = await checkAuth(1, 'mypassword');
    } catch (err) {
        console.log(`authentication process: ${err.message}`);
        return
    };
    
    try {
        data = await getStudent(auth);
    } catch (err) {
        console.log(`getting data process: ${err.message}`);
        return
    };

    console.log(data);
};
getTheResult();