// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"
const test1 = "abcccccccd";
const test2 = "apple 1231111";


function maxChar(str) {
  const characters = {};
  let max = 0;
  let maxChar = '';

  // for of is used to iterate through string and array
  // of any iterable object
  for(let char of str){
    if(characters[char]){
      characters[char]++;
    }else{
      characters[char] = 1;
    }
  }

  for(let char in characters){
    if(characters[char] > max){
      max = characters[char];
      maxChar = char;
    }
  }

  return maxChar;

}

module.exports = maxChar;

//  characters[char] = characters[char] + 1 || 1;

// This can be condensed to the example above
// if(!characters[char]){
//   characters[char] = 1;
// }else{
//   characters[char]++;
// }
