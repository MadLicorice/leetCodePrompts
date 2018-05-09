/* 
Given a non - negative integer num, repeatedly add all its digits until the result has only one digit.

For example:

Given num = 38, the process is like: 3 + 8 = 11, 1 + 1 = 2. Since 2 has only one digit, return it.

Follow up:
Could you do it without any loop / recursion in O(1) runtime ?

  Credits :
  Special thanks to @jianchao.li.fighter for adding this problem and creating all test cases. 
  */

/**
* @param {number} num
* @return {number}
*/

var addDigits = function (num) {
  let numStr = num.valueOf().toString();
  let tempSum, i;
  
  while (numStr.length > 1) {
    tempSum = 0;
    for (i = 0; i < numStr.length; i += 1) {
      tempSum += Number(numStr[i]);
    }
    numStr = tempSum.toString();
  }

  return Number(numStr);
};