const myRequest = (data, callback) => {
    const response = 10 + data;
    const error = undefined;
    return callback(error, response);
};

const result = myRequest(5, (err, res) => {
    if (err) {
        return 'You have got ERROR';
    } else {
        return res;
    };
});

console.log(result);