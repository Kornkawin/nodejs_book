/* import object */
const myObject = require('./logger-object.js');
console.log(myObject);
//myObject = 0;    // Error
myObject.log("Hello from another module by myObject");

/* import function */
const myFunc = require('./logger-function.js');
console.log(myFunc);
myObject.log("Hello from another module by myFunc");

/* import class */
const Car = require('./car.js');
console.log(Car);
const myCar = new Car(4, 'red', 'Pick-up');
console.log(`My car's color is ${myCar.color}`);

/* import variable */
const PI = require('./pi.js');
console.log(PI);

/* import object */
const SettingsObj = require('./settings.js');
console.log(SettingsObj);


/* import some object */
const { Settings } = require('./many-things.js');
console.log(Settings);

/* import everything */
const allSettings = require('./many-things.js');
console.log(allSettings.getSecretKey());