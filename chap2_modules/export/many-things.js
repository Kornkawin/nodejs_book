const Settings = {
    secretKey: 'xxx',
    userPass: 'yyy',
    databaseName: 'zzz',
}

const getSecretKey = () => {
    return Settings.secretKey;
}

/* export objects */
module.exports = {
    Settings,
    getSecretKey,
};
console.log(module);