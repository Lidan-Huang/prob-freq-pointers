"use strict";

/**Accepts two parameters, an array of distinct integers and a target number
 * return : number of pairs that the sum is equal to target number: like
 * ([10, 4, 8, 2, 6, 0], 10) => 3
 */
function countPairs(nums, target) {
  nums.sort((a, b) => a - b);
  let left = 0;
  let right = nums.length - 1;
  let count = 0;
  while (left < right) {
    const sum = nums[left] + nums[right];
    if (sum === target) {
      count++;
      left++;
      right--;
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }

  return count;
}
