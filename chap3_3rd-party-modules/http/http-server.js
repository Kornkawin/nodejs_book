const http = require('http');
const server = http.createServer((req, res) => {
    let obj = { name: 'Kornkawin', 
                age: 25, 
                city: 'Bangkok',
    };
    
    if (req.url === '/') {
        res.write('You are at home');
        res.end();
    };

    if (req.url === '/contact') {
        res.write(JSON.stringify(obj));
        res.end();
    };
});

server.on('connection', (socket)=>{
    console.log('client connected');
});

server.listen(3000);
console.log('Listening from port 3000');