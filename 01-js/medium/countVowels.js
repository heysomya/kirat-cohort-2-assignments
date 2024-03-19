/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  // Your code here
  let cnt = 0;

  const vowels = ['a', 'e', 'i', 'o', 'u'];

  for (let chr of str) {
    const ele = chr.toLowerCase();
    if (vowels.indexOf(ele) != -1) {
      cnt += 1;
    }
  }

  return cnt;
}

module.exports = countVowels;
