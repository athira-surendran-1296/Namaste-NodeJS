const fs = require('fs');

setImmediate(() => console.log('setImmediate'));

setTimeout(() => console.log('Timer expired'), 0);

Promise.resolve("Promise").then(() => console.log('Promise resolved'));

fs.readFile("./file.txt", "utf-8", () => {
  setTimeout(() => console.log('2nd Timer expired'), 0);

  process.nextTick(() => console.log('2nd nextTick'));

  setImmediate(() => console.log('2nd setImmediate'));

  console.log('fs.readFile callback executed'); 
}); 

process.nextTick(() => console.log('nextTick'));

console.log('Last line of the file');   

// Event loop waits at the poll phase when its idle

// Output:
// Last line of the file
// nextTick
// Promise resolved
// Timer expired
// setImmediate
// fs.readFile callback executed
// 2nd nextTick
// 2nd setImmediate
// 2nd Timer expired
