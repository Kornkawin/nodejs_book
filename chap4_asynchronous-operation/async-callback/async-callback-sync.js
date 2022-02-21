const myAsync = (callback) => {
    console.log('Begin');  // 1

    setTimeout(() => {
        const result = callback('First');
        console.log(result); // 5
    }, 2000);

    setTimeout(() => {
        const result = callback('Second');
        console.log(result); // 4
    }, 1000);

    setTimeout(() => {
        const result = callback('Third');
        console.log(result); // 3
    }, 0);

    console.log('End'); // 2
};

myAsync((message) => {
    return message;
});