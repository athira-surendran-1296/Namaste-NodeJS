const fs = require('fs');

const a = 100;

setImmediate(() => console.log('setImmediate callback executed'));

fs.readFile("./file.txt", "utf-8", () => {
  console.log('fs.readFile callback executed'); 
});    

setTimeout(() => console.log('setTimeout callback executed'), 0);

function printA() {
  console.log("a=",a);
}

printA();

console.log('Last line of the script executeds');

// Output:
// a= 100
// Last line of the script executeds
// setTimeout callback executed
// setImmediate callback executed
// fs.readFile callback executed    



