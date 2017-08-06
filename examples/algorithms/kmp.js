const KMP = require('../../index').KMP;

let str = "ABCABCABCABCABC",
  pat = "ABC";

console.log("String: " + str);
console.log("Pattern: " + pat);
KMP.resolve(str, pat);
