// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
  let chuncked = [];
  let index = 0;
  while (index < array.length) {
    chuncked.push(array.slice(index, index + size));
    index += size;
  }
  return chuncked;
}

module.exports = chunk;

// My solution
// function chunk(array, size) {
//   let result = [];
//   if (array.length <= size) {
//     return array;
//   }
//   while (array.length > size) {
//     result.push(array.splice(0, size));
//   }
//   result.push(array);
//   return result;
// }

// First solution
// function chunk(array, size) {
//   let chuncked = [];
//   for (const element of array) {
//     const last = chuncked[chuncked.length - 1];
//     if (!last || last.length === size) {
//       chuncked.push([element]);
//     } else {
//       last.push(element);
//     }
//   }
//   return chuncked;
// }

// Second solution
// function chunk(array, size) {
//   let chuncked = [];
//   let index = 0;
//   while (index < array.length) {
//     chuncked.push(array.slice(index, index + size));
//     index += size;
//   }
//   return chuncked;
// }
