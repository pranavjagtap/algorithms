// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// Recursion
// Consider what is the basecase, i.e. when to stop recursion
//
function steps(n) {}

module.exports = steps;

// First and also My Solution
// function steps(n) {
//   for (let row = 1; row <= n; row++) {
//     let stair = ""; // this is the line we need to print
//     for (let column = 1; column <= n; column++) {
//       stair += column <= row ? "#" : " ";
//     }
//     console.log(stair);
//   }
// }
