'use strict';

const GreedyAlgorithm = require('../../index').GreedyAlgorithm;

let alg = new GreedyAlgorithm([1, 2, 5, 10]);

let coinsSelected = alg.resolve(18);

console.log("Calculate coins needed to sum 18");
console.log("Coins of 1, 2, 5, 10 value");
coinsSelected.forEach((value, key) => {
  console.log(value + " of " + key);
});
console.log("-------------------------------")

alg = new GreedyAlgorithm([1, 7, 10]);

coinsSelected = alg.resolve(15);
console.log("Calculate coins needed to sum 15");
console.log("Coins of 1, 7, 10 value");
coinsSelected.forEach((value, key) => {
  console.log(value + " of " + key);
});
console.log("Greedy algorithm is fast but not optimized, in this case the best selection shou" +
    "ld be 1 + 7 + 7");
console.log("-------------------------------")
