"use strict";

/**Accepts an array of non-zero integers
 * separate the positive integers to the left and the negative integers to the right
 * need not be in sorted order
 * the problem should be done in place
 * return: changed array
 * Time complexity: O(n)
 */

/**test case:
 * [-5, 5] => [5, -5]
 * [-2, -3] => [-2, -3]
 * [1, 2] => [1, 2]
 * [2, -1, -3, 6, -8, 10] => [2, 10, 6, -3, -1, -8]
 */
function separatePositive(nums) {
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    if (nums[left] < 0) {
      if (nums[right] < 0) {
        right--;
      } else {
        [nums[left], nums[right]] = [nums[right], nums[left]];
      }
    } else {
      if (nums[right] < 0) {
        left++;
        right--;
      } else {
        left++;
      }
    }
  }
  return nums;
}
