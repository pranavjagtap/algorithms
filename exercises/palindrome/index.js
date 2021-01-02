// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
  //   let result = "";
  //   for (let i = str.length - 1; i >= 0; i--) {
  //     result += str[i];
  //   }
  //   return result === str;
}

module.exports = palindrome;

// Solution first
// function palindrome(str) {
//   return (
//     str
//       .split("")
//       .reverse()
//       .join("") === str
//   );
// }

// Solution second
function palindrome(str) {
  // // To explain the belo WebGLRenderingContext, splitted code into multiple functions
  // const getEquivalentOppositeIndex = i => str.length - i - 1;
  // const compareCurrentCharWithEauivalentOppositeIndexChar = () =>
  //   char === str[getEquivalentOppositeIndex()];
  // return str
  //   .split("")
  //   .every((char, i) => compareCurrentCharWithEauivalentOppositeIndexChar());
  return str.split("").every((char, i) => char === str[str.length - i - 1]);
}
