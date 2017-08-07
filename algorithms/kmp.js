"use strict";

class KMP {

  constructor() {}

  static resolve(str, pat) {

    let i = 0,
      j = 0,
      LPSArray;

    if (!pat.length || !str.length) {
      return;
    }

    LPSArray = KMP.createLPSArray(pat);
    while (i < str.length) {
      if (str[i] === pat[j]) {
        if (j === (pat.length - 1)) {
          console.log("Pattern found at " + (i - j));
          i++;
          j = 0;
        } else {
          i++;
          j++;
        }
      } else {
        if (j === 0) {
          i++;
        } else {
          j = LPSArray[j - 1];
        }
      }
    }

  }

  static createLPSArray(pat) {
    let LPSArray = [],
      i = 1,
      j = 0;

    LPSArray[0] = 0;

    while (i < pat.length) {
      if (pat[i] === pat[j]) {
        j++;
        LPSArray[i] = j;
        i++;
      } else {
        if (LPSArray[j] !== 0) {
          j = LPSArray[j - 1];
        } else {
          LPSArray[i] = 0;
          i++;
        }
      }
    }
    return LPSArray;
  }

}

module.exports = KMP;
