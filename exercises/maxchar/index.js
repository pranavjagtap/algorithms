// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

/*
    For counting chars related questions we will be creating a object of hte available data set, either string or array (given in question)
    One possible way to generate this object
    For Example we have "Hello There!", then we are trying to create an Object as below,
    {
        H: 2,
        e: 3,
        l: 2,
        o: 1,
        T: 1,
        r: 1
    }
*/
function maxChar(str) {
  let newObject = {};
  let maxChars = 0,
    maxCount = 0;
  for (const character of str) {
    // newObject[character] =
    //   newObject[character] && newObject[character] > 0
    //     ? newObject[character] + 1
    //     : 1;
    // Optimised way of wtring above code as mentioned in the video
    newObject[character] = newObject[character] + 1 || 1;
  }
  //   Object.keys(newObject).map(key => {
  //     if (newObject[key] > maxCount) {
  //       maxChars = key;
  //       maxCount = newObject[key];
  //     }
  //   });
  //   Better way of looping over object keys as mentioned in the video
  for (const key in newObject) {
    if (newObject[key] > maxCount) {
      maxChars = key;
      maxCount = newObject[key];
    }
  }
  return maxChars;
}

module.exports = maxChar;
