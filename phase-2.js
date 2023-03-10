const [addNums, addManyNums] = require("./phase-1");

// Runs `addNums` in 10 increasing increments
function addNums10(increment) {
  // Fill this in
  let sum = [];

  for(let i = increment; i <= 10 * increment; i += increment){
    sum.push(addNums(i));
  }

  return sum;

}

// Runs `addManyNums` in 10 increasing increments
function addManyNums10(increment) {
  // Fill this in
  let sum = [];

  for(let i = increment; i <= 10 * increment; i += increment){
    sum.push(addManyNums(i));
  }

  return sum;

}

module.exports = [addNums10, addManyNums10];
