"use strict";


// add whatever parameters you deem necessary
// sorted


function averagePair(sortedInts, targetAvg) {
    let left = 0;
    let right = sortedInts.length - 1;


    while (left < right) {

        let workingAvg = ((sortedInts[left] + sortedInts[right]) / 2);

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
