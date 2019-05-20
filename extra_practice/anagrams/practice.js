// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False


const str1 = "RAIL! SAFETY!";
const str2 = "fairy tales";

// Helper function to map out each string
const buildCharMap = (str) => {
  const charMap = {};
  for(let char of str.replace(/[^\w]/g, '').toLowerCase()){
    charMap[char] = charMap[char] + 1 || 1;
  }
  return charMap;
}


// Solution 1
// Utilizing RegExp and toLowerCase()
// "/[^\w]/g" will remove anything but letters
function anagrams(stringA, stringB) {
  const aCharMap = buildCharMap(stringA);
  const bCharMap = buildCharMap(stringB);

  if(Object.keys(aCharMap).length !== Object.keys(bCharMap).length){
    return false;
  }

  for(let char in aCharMap){
    if(aCharMap[char] !== bCharMap[char]){
      return false;
    }
  }

  return true;
}

console.log(anagrams(str1, str2));


module.exports = anagrams;
