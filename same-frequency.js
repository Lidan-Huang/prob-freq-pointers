"use strict";

/** Accepts two positive integers. Returns true if the two numbers have the same frequency of digits. 
 * Otherwise, returns false */
function sameFrequency(int1,int2) {

    if(int1.toString().length !== int2.toString().length){
        return false;
    }

    let int1Map = countFreq(int1.toString());
    let int2Map = countFreq(int2.toString());


    for (let key of int1Map.keys()) {
        if (!(int1Map.get(key) === (int2Map.get(key)))) {
            return false;
        }
    }

    return true;
}


function countFreq(characters) {
    let freq = new Map();
    for (let char of characters) {
        let charCount = freq.get(char) || 0;
        freq.set(char, charCount + 1);
    }
    return freq;
}