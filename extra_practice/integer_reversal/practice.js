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

// Another solution using Math.sign() function it makes the code much cleaner

function reverseIntTwo(n){
  const sign = Math.sign(n);
  let revStrInt = n.toString(10).split('').reverse().join('');

  if(sign === -1){
    return parseInt(revStrInt, 10) * sign;
  }else if(sign === 1){
    return parseInt(revStrInt, 10);
  }else{
    return 0;
  }
}

//this is the thrid solution: it is extreamly similar to the second solution but much more
// condensed and shorter
function reversedIntThree(n){
  const revStrInt = n.toString(10).split('').reverse().join('');

  return parseInt(revStrInt, 10) * Math.sign(n);
}


module.exports = reverseInt;
