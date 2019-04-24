// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

const testStr01 = 'abba';
const testStr02 = 'abcdefg';

function reverseString(str){
  let reversed = '';

  for(let i = str.length - 1; i >= 0; i--){
    reversed += str.charAt(i);
  }
  return reversed
}

function palindrome(str) {
  let reversed = reverseString(str);
  if (reversed === str){
    return true;
  }else{
    return false;
  }
}

console.log(palindrome(testStr01));
console.log(palindrome(testStr02));


//module.exports = palindrome;
