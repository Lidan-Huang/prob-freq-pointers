"use strict";

/**Accepts an array of integers
 * return: the smallest pivot index where the left side sum is equal to the right side sum
 * otherwise return -1, like:
 * [1,2,1,6,3,1] => 3
 * [5,2,7] => -1
 * [-1,3,-3,2] => 1
 */

function pivotIndex(nums) {
  let rightSum = nums.reduce((a, b) => a + b, 0);
  let leftSum = 0;

  for (let i = 0; i < nums.length; i++) {
    leftSum += nums[i];
    if (leftSum === rightSum) {
      return i;
    }
    rightSum -= nums[i];
  }

  return -1;
}
