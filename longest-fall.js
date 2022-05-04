"use strict";

/** Accepts an array of integers
 * return the number of longest decrease integers, like:
 * [5, 3, 1, 3, 0] => 3
 * [5, 4, 4, 4, 3, 2] => 3
 * [] => 0
 * [2, 2] => 1
 * [9, 8, 7, 6, 5, 6, 4, 2, 1] => 5
 */

function longestFall(nums) {
  if (nums.length === 0) return 0;
  if (nums.length === 1) return 1;
  let maxCount = 1;
  let count = 1;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i + 1] < nums[i]) {
      count++;
      if (count > maxCount) maxCount = count;
    } else {
      count = 1;
    }
  }
  return maxCount;
}
