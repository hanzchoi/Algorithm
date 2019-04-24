// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'elppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// Solution 1
// This solution utilize the js built in function to
// reverse the string
function reverse(str) {
  return str.split('').reverse().join('');
}

//Solution 2
function reverseVersionTwo(str){
  let reversedString = "";
  for(let i = str.length-1; i >= 0; i--){
    reversedString += str.charAt(i);
  }
  return reversedString;
}

// Solution 3
// very similar to solution two but with for of syntax
function reverseVersionThree(str){
  let reversedString = "";
  for(let character of str){
    reversedString = character + reversedString;
  }
  return reversedString
}

// Solution 4
// similar to solution one but uses reduce()
// first parameter is a callback and second is the init value
// with in the callback function we have (accumulator, currentValue)
// also using ES2015 so no return on the callback function
function reverseVersionFour(str){
  return str.split('').reduce((rev, char) => char + rev, '')
}

module.exports = reverse;
