/* 
Given a string S and a character C, return an array of integers representing the shortest distance from the character C in the string.
  Example 1:
Input: S = "loveleetcode", C = 'e'
Output: [3, 2, 1, 0, 1, 0, 0, 1, 2, 2, 1, 0]

Note:
S string length is in [1, 10000].
C is a single character, and guaranteed to be in string S.
All letters in S and C are lowercase.
*/

var shortestToChar = function (S, C) {
  const result = [];
  const locationsOfC = [];
  let currentIndexOfC = 0;
  let i;

  for (i = 0; i < S.length; i += 1) {
    if (S[i] === C) {
      locationsOfC.push(i)
    }
  }

  if (locationsOfC.length > 1) {
    for (i = 0; i < S.length; i += 1) {
      let firstDiff = Math.abs(locationsOfC[currentIndexOfC] - i);
      let secondDiff = Math.abs(locationsOfC[currentIndexOfC + 1] - i);
      if (firstDiff < secondDiff) {
        result.push(firstDiff);
      } else {
        result.push(secondDiff);
        if ((currentIndexOfC + 2) !== locationsOfC.length) {
          currentIndexOfC += 1;
        }
      }
    }
  } else if (locationsOfC.length === 1) {
    for (i = 0; i < S.length; i += 1) {
      let diff = Math.abs(locationsOfC[currentIndexOfC] - i);
      result.push(diff);
    }
  } else {
    return result;
  }

  return result;
};