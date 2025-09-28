const fs = require('fs');
const a = 100;
setImmediate(() => console.log('setImmediate callback executed'));
Promise.resolve("Promise").then(() => console.log('Promise resolved'));
fs.readFile("./file.txt", "utf-8", () => {
  console.log('fs.readFile callback executed'); 
});    
setTimeout(() => console.log('setTimeout callback executed'), 0);
process.nextTick(() => console.log('process.nextTick callback executed'));
function printA() {
  console.log("a=",a);
}
printA();
console.log('Last line of the script executed');

// Output:
// a=100
// Last line of the script executed
// process.nextTick callback executed
// Promises
// setTimeout callback executed
// setImmediate callback executed
// fs.readFile callback executed



