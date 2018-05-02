/* 
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

    Example 1:

Input: ["flower", "flow", "flight"]
Output: "fl"
Example 2:

Input: ["dog", "racecar", "car"]
Output: ""
Explanation: There is no common prefix among the input strings.
    Note:

All given inputs are in lowercase letters a - z. 
*/
/**
 * @param {string[]} strs
 * @return {string}
 */

var longestCommonPrefix = function (strs) {
  if (strs.length === 0) {
    return '';
  }
  if (strs.length === 1) {
    return strs[0];
  }
  let result = '';
  let flag = true;
  let i = 0;
  let maxLengthWord = strs.reduce((acc, word) => {
    if (acc < word.length) {
      acc = word.length;
    }
    return acc;
  }, 0);

  while (flag && i < maxLengthWord) {
    for (let j = 0; j < strs.length - 1; j += 1) {
      if (strs[j][i] !== strs[j + 1][i]) {
        flag = false;
        break;
      } else if (j === strs.length - 2) {
        result += strs[j][i];
      }
    }
    i += 1;
  }

  return result;
};
