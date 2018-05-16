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
  let result = [];
  let locationsOfC = [];
  let currentIndexOfC = 0;
  let i;
  
  for (i = 0; i < S.length; i += 1) {
    if (S[i] === C) {
      locationsOfC.push(i)
    }
  }
  
  for (i = 0; i < S.length; i += 1) {
    if (currentIndexOfC === i) {
      result.push(0);
      currentIndexOfC += 1;
    } else {
      let firstDiff = currentIndexOfC - i;
      let secondDiff = currentIndexOfC - (i + 1);
      if (firstDiff < 0) {
        firstDiff *= -1;
      }
      if (firstDiff > secondDiff) {
        result.push(firstDiff);
      } else {
        result.push(secondDiff);
        currentIndexOfC += 1;
      }
    }
  }
};