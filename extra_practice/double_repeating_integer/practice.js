// Given an array of integers,
// 1 ≤ a[i] ≤ n (n = size of array),
// some elements appear twice and others appear once.

// Find all the elements that appear twice in this
// array.

// Example:
// Input:
// [4,3,2,7,8,2,3,1]
//
// Output:
// [2,3]

const test = [4, 3, 2, 7, 8, 2, 3, 1]
function find_duplicates(nums){
    let result = [];
    let len = nums.length;
    for (let i = 0; i < len; i++) {
        let idx = nums[i] % len;
        console.log(idx)
        if (nums[idx] > len) {
            result.push(idx || len);
        } else {
            nums[idx] += len;
        }
    }
    return result;
}
