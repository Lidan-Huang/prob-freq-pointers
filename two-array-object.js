"use strict";

// add whatever parameters you deem necessary
function twoArrayObject(keyArr, valueArr) {
    let keyToValue = {};

    if(keyArr.length <= valueArr.length) {
        for(let i=0; i<keyArr.length; i++) {
            keyToValue[keyArr[i]] = valueArr[i];
        }
    }

    if(keyArr.length > valueArr.length) {
        for(let i=0; i < valueArr.length; i++){
            keyToValue[keyArr[i]] = valueArr[i];
        }

        for(let j=valueArr.length; j<keyArr.length; j++){
            keyToValue[keyArr[j]] = null;
        }
    }

    return keyToValue;
}
