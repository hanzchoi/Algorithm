// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false


//Solution Two
function palindrome(str) {
  const reversed = str.split('').reverse().join('');

  return reversed === str;
}

// Solution Three
// This one will use the every() to solve out the problem.
function palindromeVersionThree(str){
  const strLength = str.length - 1;
  return str.split('').every((char, i) => {
    return char === str.charAt(strLength - i);
  });

}


module.exports = palindrome;
