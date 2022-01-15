"use strict";

// add whatever parameters you deem necessary & write doc comment
function canConstructWord(word, letters) {
    let freqWord = countFreq(word);
    let freqLetters = countFreq(letters);

    for(let key of freqWord.keys()) {
        if(!(freqLetters.has(key) && (freqWord.get(key) <= freqLetters.get(key)))){
            return false;
        }
    }

    return true;

}

function countFreq(characters) {
    let freq = new Map();
    for(let char of characters) {
        let charCount = freq.get(char) || 0;
        freq.set(char, charCount + 1);
    }
    return freq;
}