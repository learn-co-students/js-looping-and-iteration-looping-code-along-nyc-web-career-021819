// Code your solutions in this file
function printBadges(array) {
    for (let i = 0; i < array.length; i++) {
        console.log(`Welcome ${array[i]}! You are employee #${i+1}.`)
    }
    return array;
}

function tailsNeverFails() {
let counter = 0;
   function coinFlip() { return Math.random() >= 0.5}
   while (coinFlip() === true) {
    counter++;
   }
   return `You got ${counter} tails in a row!`
}
// invokes Math.random() to simulate coin flips ‣
// ReferenceError: tailsNeverFails is not defined
//     at Context.it (test/indexTest.js:51:4)
// returns the number of "Tails" flips in a row ‣
// ReferenceError: tailsNeverFails is not defined
//     at Context.it (test/indexTest.js:65:4)
// loops indefinitely until a flip results in "Heads"
