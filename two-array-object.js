"use strict";

/** Accepts two arrays of varying lengths. First consists of keys. Second consists of values.
 * If there are more values than keys, then the extra values will be ignored.
 * If there are not enough values, the rest of keys will have a value of null.
 * Returns a new object created with keys from the first array and values from the second array.
*/
function twoArrayObject(keyArr, valueArr) {
    let keyToValue = {};

    if (keyArr.length <= valueArr.length) {
        for (let i = 0; i < keyArr.length; i++) {
            keyToValue[keyArr[i]] = valueArr[i];
        }
    }

    if (keyArr.length > valueArr.length) {
        for (let i = 0; i < valueArr.length; i++) {
            keyToValue[keyArr[i]] = valueArr[i];
        }

        for (let j = valueArr.length; j < keyArr.length; j++) {
            keyToValue[keyArr[j]] = null;
        }
    }

    return keyToValue;
}