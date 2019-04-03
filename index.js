// Code your solutions in this file

function printBadges(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(`Welcome ${arr[i]}! You are employee #${i +1}.`)
  } return arr
}

function tailsNeverFails() {
  count = 0
  while (Math.random() >= 0.5) {
    count++
  } return `You got ${count} tails in a row!`
}
