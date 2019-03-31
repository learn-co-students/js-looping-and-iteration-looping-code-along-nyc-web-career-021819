// Code your solutions in this file

name_array = ['Ada', 'Brendan', 'Ali']

function printBadges(name_array){
  for (let i = 0; i < name_array.length; i++) {
    console.log(`Welcome ${name_array[i]}! You are employee #${i+1}.`)
  }
  return name_array
}

function coinFlip(){
  const flip = Math.round(Math.random()) == 0 ? `Heads` : `Tails`;
  return flip
}

function tailsNeverFails(){
  let i = 0
  while (coinFlip() == "Tails"){
    i++
  }
  return `You got ${i} tails in a row!`
}
