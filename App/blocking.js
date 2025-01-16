console.log('Blocking DEMO - Start');

const crypto = require('node:crypto');

// Password-Based Key Derivation Function 2 (PBKDF2)

// Sync
console.log('MAIN THREAD BLOCKED')
crypto.pbkdf2Sync('password', 'salt', 5000000, 50, 'sha512'); // Dont have the concept of callback as it is synchronous
console.log('MAIN THREAD UN BLOCKED')
console.log('Key 1 generated!!')

// Async
crypto.pbkdf2('password', 'salt', 5000000, 50, 'sha512', (err, key) => {
    console.log('Key 2 generated!!')
}); 

// SET TIME OUT - 0 
setTimeout(() => {
    console.log('I am from setTimeout')
}, 1000);
/**
 * It is not sure that this callback will getexecuted exactly after 1 sec, it will do so only if the main thread is not blocked
 * meaning the call stack must be free
 */

console.log('Blocking DEMO - End');