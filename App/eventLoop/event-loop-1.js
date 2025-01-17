const fs = require('node:fs');
const a = 100;

setImmediate(() => console.log('setImmediate'));

fs.readFile('../file.txt', 'utf-8', () => {
    console.log('file rading callback')
})

setTimeout(() => {
    console.log('setTimeout')
}, 0);

function printA() {
    console.log('a = ', a);
}

printA();
console.log('Last line of the code file')

// a =  100
// Last line of the code file
// setTimeout
// setImmediate
// file rading callback (executed in the second event loop cycle as file reading is a costly operation)