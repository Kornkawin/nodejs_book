const Event = require('events');
const eventEmitter = new Event();

eventEmitter.addListener('myEvent', (args) => {
    console.log('You met myEvent with: ', args);
});
eventEmitter.on('myEvent2', (arg1, arg2) => {
    console.log('You met myEvent2 with: ', arg1, arg2);
});

eventEmitter.emit('myEvent', {id:1, name:'Kornkawin'});
eventEmitter.emit('myEvent2', 1, 'Kornkawin');