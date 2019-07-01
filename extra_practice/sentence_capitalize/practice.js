// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

const test1 = 'a short sentence';

function capitalize(str) {
  capitalizeSentence = [];
  let temp = str.split(' ');
  for(let word of temp){
    if(word.length === 1){
      capitalizeSentence.push(word.toUpperCase())
    }else{
      capitalizeSentence.push(word.charAt(0).toUpperCase() + word.slice(1))
    }
  }
  return capitalizeSentence.join(' ')

}

function capitalizeTwo(str){
  const words = [];

  for( let word of str.split(' ')){
    word.push(word[0].toUpperCase() + word.slice(1));
  }

  return words.join(' ');
}

function capitalizeThree(str){
  let result = str.charAt(0).toUpperCase()

  for(let i = 1; i < str.length; i++){
    if(str.charAt(i - 1) === ' '){
      result += str.charAt(i).toUpperCase();
    }else{
      result += str.charAt(i)
    }
  }

  return result

}

console.log(capitalizeThree(test1))

module.exports = capitalize;
