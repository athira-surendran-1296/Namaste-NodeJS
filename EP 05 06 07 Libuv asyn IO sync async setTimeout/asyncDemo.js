const http = require('node:https');
const fs = require('node:fs');

var a = 10000000;
var b = 56789945;

console.log('hello world');

// API Call - async task
http.get('https://dummyjson.com/products/1', (res) => {
 console.log('Got response from api');
});

// Read file content - async task
fs.readFile('./file.txt', 'utf-8',(err,data) => {
    console.log('Fetched file content :', data)
})

fs.readFileSync('./file.txt', 'utf-8'); // Synchronous file read - not recommeneded to use - BLOCKS the MAIN THREAD
console.log('This line will execute only after the sync file read id complete')

// setTimeout 5 seconds - async task
setTimeout(() => {
    console.log('call back inside setTimeout');
}, 5000);

function multiply(a,b) {
    return a*b;
}

console.log('Result of multiplication =', multiply(a,b));

