// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9
//   console.log(reverseStringInt.charAt(reverseStringInt.length-1))

const intArr = [15, 981, 500, -15, -90];

function reverseInt(n) {
  let reverseStringInt = n.toString(10).split('').reverse().join('');
  const lastIndex = reverseStringInt.length - 1;

  if(reverseStringInt.charAt(lastIndex) === "-"){
    return (
      parseInt(`${reverseStringInt.charAt(lastIndex)}`
      +`${parseInt(reverseStringInt.slice(0,lastIndex), 10)}`
      ,10)
    )
  }else{
    return parseInt(reverseStringInt, 10);
  }
}


module.exports = reverseInt;
