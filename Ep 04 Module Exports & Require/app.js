// const { x, sum } = require('./sum'); // require function is used to include a separate module
                                     // object destructuring

// const { mul } = require('./mul');

const {x, sum, mul} = require('./caluculate') // require('./caluculate/index') 

//import { sum, x } from "./sum.js"; // es6 module production

let myName = 'Athira';
console.log('My name is', myName);

sum(3,7)
mul(3,7)
console.log(x);

/**
 * Say we want to include a external file which has some code.
 * In this case we can use the require statement.
 * The code in required files is executed first
 * 
 * Here we are requiring the sum.js file
 * 
 * hence output: 
 *  This is hello world from the sum.js file
 *  My name is Athira
 */

// sum(1,3); // Error - Sum is not defined (if not exported from module) module.exports = sum
// console.log(x)
/**
 * We have included the sum.js file. Still we get a error saying sum function not defined
 * This is because the variables and functions in a imported module cannot be used directly
 * By default the modules PROTECTS their variables and functions from leaking
 * 
 * Hence we will have to explicitly export it using module.export
 * 
 * require function simply returns whatever is exported from the module
 */