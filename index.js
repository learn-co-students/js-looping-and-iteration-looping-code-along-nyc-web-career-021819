function printBadges(names) {
    for (let i = 0; i < names.length; i++) {
        console.log(`Welcome ${names[i]}! You are employee #${i + 1}.`);
    }
    return names;
}

printBadges(names);

function tailsNeverFails() {
  let flips = 0;

  while(Math.random() >= 0.5) {
    flips++;
  }

  return `You got ${flips} tails in a row!`
}
// Code your solutions in this file
