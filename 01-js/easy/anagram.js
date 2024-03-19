/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  const counterArray = Array(256).fill(0);

  for (let ele of str1) {
    const idx = ele.toLowerCase().charCodeAt();
    counterArray[idx] += 1;
  }

  for (let ele of str2) {
    const idx = ele.toLowerCase().charCodeAt();
    counterArray[idx] -= 1;
  }

  for (let ele of counterArray) {
    if (ele != 0) return false;
  }

  return true;
}

module.exports = isAnagram;
