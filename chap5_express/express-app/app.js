/* Data */
const students = [
    {id:1, name:'Kornkawin'},
    {id:2, name:'Bijayayothin'},
    {id:3, name:'Sombat'},
];
const students1 = [
    {id:1, name: 'Sombat'},
    {id:2, name: 'Phunchan'},
];
const schools = {
    'bodin': students,
    'chula': students1,
};

const expressFunc = require('express');
const expressApp = expressFunc();
/* 
    specify the type of data attached 
    with Request Body 
*/
expressApp.use(expressFunc.json());



/* .use() method example 1 */
expressApp.use((req, res, next) => {
    console.log('Hello Middleware #1');
    next();
});
/* GET method examples */ 
expressApp.get('/', (req, res) => {
    res.send('<H1>Hello World!</H1>');
});
expressApp.get('/api/resource', (req, res) => {
    const myJson = {id:1, name:'Kornkawin'};
    res.send(myJson);
});
expressApp.get('/api/students', (req, res) => {
    res.send(students);
});

/* .use() method example 2 */
expressApp.use((req, res, next) => {
    console.log('Hello Middleware #2');
    next();
});
/* 
    GET method with one parameter
    request at '/api/students/1' 
*/
expressApp.get('/api/students/:id', (req, res) => {
    const id = req.params.id    
    console.log(typeof(id));    // (string) "1"
    if (id == 1) {
        res.send(students[0]);
    } else if (id == 2) {
        res.send(students[1]);
    } else {
        res.send('Error 404 page not found!');
    };
});
/* 
    GET method with a set of parameters
    request at '/api/atom/99' 
*/
expressApp.get('/api/:name/:id', (req, res) => {
    const data = req.params     
    console.log(typeof(data));  // (object) {'name': 'atom', 'id': '99'}
    if (data) {
        res.send(data);
    } else {
        res.send('Error 404 page not found!');
    };
});
/*
    GET method with a set of parameters
    request at '/api/search/bodin/1' 
*/
expressApp.get('/api/search/:school/:id', (req, res) => {
    const id = req.params.id;
    const school = req.params.school.toLowerCase();
    if (!schools[school]) {
        res.send('School not found!');
    } else if (!schools[school][id - 1]) {
        res.send(`In ${school}, student not found for id ${id}!`);
    } else {
        res.send(schools[school][id - 1]);
    };
});

/*
    GET method with Query String
    request at '/api/?a=1&b=3'
    or
    request at '/api/?school=chula&id=1'
*/
expressApp.get('/api', (req, res) => {
    const myQueryString = req.query;
    console.log(myQueryString);     // (object) {'a': '1', 'b': '3'}
    if (Object.keys(myQueryString).length != 0) {
        res.send(myQueryString);
    } else {
        res.send('Error 404 page not found!');
    };
});

/* 
    POST method with content-type: application/json
    request at '/api/add'
    with Request Body in json format
    {
        "id": 4,
        "name": "Phunchan"
    }
*/
expressApp.post('/api/add', (req, res) => {
    const studentName = req.body.name;
    if (studentName.length <= 2) {
        res.status(400).send('Error cannot add student!');
    } else {
        const student = {
            id: students.length + 1,
            name: studentName,
        };
        students.push(student);
        res.send(student);   
    }
});

/* 
    PUT method with content-type: application/json
    request at '/api/update/1'
    with Request Body in json format
    {
        "id": 1,
        "name": "Atom"
    }
*/
expressApp.put('/api/update/:id', (req, res) => {
    const id = req.params.id
    const name = req.body.name;
    
    if (name.length <= 2 || isNaN(id)) {
        res.status(400).send('Error cannot update student!');
    } else {
        const student = students.find(element => {
            return element.id == id;
        });
        if (student) {
            student.name = name;
            res.send(students);
        } else {
            res.status(400).send('Cannot find student to update!');
        };
    };
});

/* 
    DELETE method with content-type: application/json
    request at '/api/delete/1'
    with Request Body in json format
    {
        "confirmId": 1
    }
*/
expressApp.delete('/api/delete/:id', (req, res) => {
    const id = req.params.id;
    const confirmId = req.body.confirmId
    if (id != confirmId) {
        res.status(400).send('Error cannot delete student!')
    } else {
        const student = students.find(element => element.id == id);
        if (student) {
            const index = students.indexOf(student);
            students.splice(index, 1);
            res.send('Delete student '+ student.name + ' successfully!');
        } else {
            res.status(400).send('Cannot find student to delete!');
        };
    };
});

/*  run Express server  */
const port = process.env.PORT || 3000;
expressApp.listen(port, () => {
    console.log(`Listening on port ${port}`);
});