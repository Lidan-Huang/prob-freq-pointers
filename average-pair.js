"use strict";

/** Receives a sorted array of ints and a target average. Returns true if the sorted array contains a pair of values
 * that equal the target when averaged. Otherwise, returns false.
 */
function averagePair(sortedInts, targetAvg) {
    let left = 0;
    let right = sortedInts.length - 1;

    while (left < right) {

        const workingAvg = ((sortedInts[left] + sortedInts[right]) / 2);

        if (workingAvg === targetAvg) {
            return true;
        }

        else if (workingAvg < targetAvg) {
            left++;
        }

        else {
            right--;
        }

    }
    return false;
}
