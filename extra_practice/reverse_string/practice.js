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
  const arr = str.split('');
  arr.reverse();

}

//Solution 2
function reverseVersionTwo(){
  let reversedString = "";
  for(let i = str.length-1; i >= 0; i--){
    reversedString += str.charAt(i);
  }
  return reversedString;
}

module.exports = reverse;
