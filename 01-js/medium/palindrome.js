/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrome as 'N' and 'n' are considered case-insensitive.
*/

function isAlNum(ele) {
  const code = ele.charCodeAt();
  if (
    !(code > 47 && code < 58) && // numeric (0-9)
    !(code > 64 && code < 91) && // upper alpha (A-Z)
    !(code > 96 && code < 123) // lower alpha (a-z)
  ) {
    return false;
  }
  return true;
}

function isPalindrome(str) {
  let start = 0;
  let end = str.length - 1;

  while (start < end) {
    if (isAlNum(str[start]) == false) {
      start += 1;
    } else if (isAlNum(str[end]) == false) {
      end -= 1;
    } else {
      if (str[start].toLowerCase() != str[end].toLowerCase()) {
        return false;
      }
      start += 1;
      end -= 1;
    }
  }
  return true;
}
module.exports = isPalindrome;
