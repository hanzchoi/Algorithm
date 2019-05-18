// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

const test1 = [1, 2, 3, 4];
const test2 = [1, 2, 3, 4, 5];

// Solution One
function chunk(array, size) {
  let chunkedArr = [];

  for(let element of array){
    const last = chunkedArr[chunkedArr.length - 1];
    if(!last || last.length === size) {
      chunkedArr.push([element])
    }else{
      last.push(element)
    }
  }

  return chunkedArr
}


// Solution Two
const chunckTwo(array, size){

}
//console.log(chunk(test2, 2));
//chunk(test2, 2);

module.exports = chunk;
