const fs = require('fs');

setImmediate(() => console.log('setImmediate'));

setTimeout(() => console.log('Timer expired'), 0);

Promise.resolve("Promise").then(() => console.log('Promise resolved'));

fs.readFile("./file.txt", "utf-8", () => {
  console.log('fs.readFile callback executed'); 
}); 

process.nextTick(() => {
  process.nextTick(() => console.log('inner nextTick'));
  console.log('nextTick');
});

console.log('Last line of the file');   


// Output:
// Last line of the file
// nextTick
// inner nextTick
// Promise resolved
// Timer expired
// setImmediate
// fs.readFile callback executed

