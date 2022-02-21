const expressFunc = require('express');
const app = expressFunc();

/* run before the next middleware */
app.use((req, res, next) => {
    console.log('Hello Middleware');        // 1
    next();
});

/* run after */
app.get('/', (req, res) => {
    console.log('Hello Express!!');         // 2
    res.send('<H1>Hello Express!</h1>');    // 3
});

app.listen(3000, () => {
    console.log('Listening on port 3000');
});