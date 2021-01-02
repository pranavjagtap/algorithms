// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  if (n === 0) return n;
  return (
    parseInt(
      n
        .toString()
        .split("")
        .reverse()
        .join("")
    ) * Math.sign(n)
  );
}

module.exports = reverseInt;

// My solution
// function reverseInt(n) {
//   if (n === 0) return n;
//   const isNegative = n < 0;
//   if (isNegative) n *= -1;
//   let result = 0;
//   while (n > 0) {
//     result = result * 10 + (n % 10);
//     n = Math.trunc(n / 10);
//   }
//   return isNegative ? result * -1 : result;
// }

// My another solution
// function reverseInt(n) {
//   if (n === 0) return n;
//   return Math.sign(n) > 0
//     ? parseInt(
//         n
//           .toString()
//           .split("")
//           .reverse()
//           .join("")
//       )
//     : parseInt(
//         (n * -1)
//           .toString()
//           .split("")
//           .reverse()
//           .join("")
//       ) * -1;
// }

// First solution
// function reverseInt(n) {
//   if (n === 0) return n;
//   return (
//     parseInt(
//       n
//         .toString()
//         .split("")
//         .reverse()
//         .join("")
//     ) * Math.sign(n)
//   );
// }
