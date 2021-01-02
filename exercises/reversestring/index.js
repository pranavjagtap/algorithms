// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  let initialValue = "";
  debugger;
  return str
    .split("")
    .reduce((reversed, character) => character + reversed, initialValue);
}

reverse("asdf");
module.exports = reverse;

/**
 * My Solution
 */
// function reverse(str) {
//   let reverseString = "";
//   for (let i = str.length - 1; i >= 0; i--) {
//     reverseString += str[i];
//   }
//   return reverseString;
// }

/**
 * First solution
 */
// function reverse(str) {
//   return str
//     .split("")
//     .reverse()
//     .join("");
// }

/**
 * Second solution
 */
// function reverse(str) {
//   let reversed = "";
//   for (const character of str) {
//     reversed = character + reversed;
//   }
//   return reversed;
// }

/**
 * Third solution
 */
// function reverse(str) {
//   let initialValue = "";
//   return str
//     .split("")
//     .reduce((reversed, character) => character + reversed, initialValue);
// }
