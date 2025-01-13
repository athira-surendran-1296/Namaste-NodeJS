let myName = 'Athira';
console.log('My name is', myName);

/*
*  What is the global object?
        The global object in Browsers - window object (this, self, frames)
        The global object in Node - global object
        It provides us with many super powers like setTimeout, setInterval and may other functions
*/
console.log("The global object", global);

/*
*  What is 'this' in Node JS?
        {} empty object

        This is empty object in case of Node JS. 
        In browsers this points to the global object i.e. window, but its not the case here. 
*/
console.log('this', this); // {} empty object


// The globalThis Object
/**
 * To avoid confusion as per standard in all the JS environment the global object is – globalThis
 */

console.log("The GLOBAL THIS", globalThis);

// Global and global this are equal
console.log(global === globalThis); //true