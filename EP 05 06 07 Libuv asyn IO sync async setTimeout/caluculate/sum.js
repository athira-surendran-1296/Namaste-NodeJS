// Common JS module
x = 100;

const sum = (a,b) => console.log('The sum is ', a+b);

console.log("module.exports - ",module.exports); // module.exports is simply a empty object {}

module.exports = {
    x,sum
}

// ES6 Module

/*

    // y = 'hello' // will throw error y is not defined as in strict mode we cannot define a variable without using var, let or const

    export const x = 100;

    export const sum = (a,b) => console.log('The sum is ', a+b);
*/