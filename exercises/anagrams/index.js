// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  stringA = stringA
    .replace(/[^\w]/g, "") // remove all other text except a,lphabets
    .toLowerCase() // convert all remaining alphabets, convert all to lower case
    .split("") // convert the string to array, so that we can sort the contents in a sequence to check it wiht another string.
    .sort() // sort the array
    .join(""); // convert array to string
  stringB = stringB
    .replace(/[^\w]/g, "")
    .toLowerCase()
    .split("")
    .sort()
    .join("");
  return stringA === stringB; // check if the strings which are set of sorted characters is equal;
}

module.exports = anagrams;

// My Solution
// function anagrams(stringA, stringB) {
//   let stringAObject = {},
//     stringBObject = {};
//   let stringAObjectCount = 0,
//     stringBObjectCount = 0;
//   stringA = stringA.replace(/[^\w]/g, "").toLowerCase();
//   stringB = stringB.replace(/[^\w]/g, "").toLowerCase();
//   for (const key of stringA) {
//     stringAObject[key] = stringAObject[key] + 1 || 1;
//     stringAObjectCount++;
//   }
//   for (const key of stringB) {
//     stringBObject[key] = stringBObject[key] + 1 || 1;
//     stringBObjectCount++;
//   }
//   console.log("stringObjects", stringAObject, stringA, stringBObject, stringB);
//   if (stringAObjectCount !== stringBObjectCount) {
//     return false;
//   }
//   for (const key in stringAObject) {
//     if (!stringBObject[key] || stringAObject[key] !== stringBObject[key])
//       return false;
//   }
//   return true;
// }

// First Solution
// function buildCharMap(str) {
//   let charMap = {};
//   for (const char of str.replace(/[^\w]/g, "").toLowerCase()) {
//     charMap[char] = charMap[char] + 1 || 1;
//   }
//   return charMap;
// }
// function anagrams(stringA, stringB) {
//   const aCharMap = buildCharMap(stringA);
//   const bCharMap = buildCharMap(stringB);
//   if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
//     return false;
//   }
//   for (const char in aCharMap) {
//     if (aCharMap[char] !== bCharMap[char]) return false;
//   }
//   return true;
// }
