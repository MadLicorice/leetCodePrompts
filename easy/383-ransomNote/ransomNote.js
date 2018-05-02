/* 
Given an arbitrary ransom note string and another string containing letters from all the magazines, write a function that will return true if the ransom note can be constructed from the magazines; otherwise, it will return false.

Each letter in the magazine string can only be used once in your ransom note.

    Note:
You may assume that both strings contain only lowercase letters.
canConstruct("a", "b") -> false
canConstruct("aa", "ab") -> false
canConstruct("aa", "aab") -> true
*/
/* 
Iterate over first string character by character
Try to find that character in the 2nd string
if it can't be found, return false
else if it can be found, remove that character from the second string
and if you can get to the end of the first string, return true
*/
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  if (ransomNote === '') {
    return true;
  }
  if (magazine === '') {
    return false;
  }
  for (let i = 0; i < ransomNote.length; i += 1) {
    let foundIndex = magazine.indexOf(ransomNote[i]);
    if (foundIndex === -1) {
      return false;
    }
    magazine = magazine.slice(0, foundIndex) + magazine.slice(foundIndex + 1);
  }
  return true;
};

