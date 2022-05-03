"use strict";

/** Receives two strings, a word and some letters. 
 * Returns true if a word can be built with the letters given.
 * Otherwise, returns false.
 */
function canConstructWord(word, letters) {
    const freqWord = countFreq(word);
    const freqLetters = countFreq(letters);

    for (let key of freqWord.keys()) {
        if (!(freqLetters.has(key) && (freqWord.get(key) <= freqLetters.get(key)))) {
            return false;
        }
    }
    return true;
}

/** Accepts a string 
 *  returns a frequency count Map of the characters contained within the string.
 */
function countFreq(characters) {
    let freq = new Map();
    for (let char of characters) {
        let charCount = freq.get(char) || 0;
        freq.set(char, charCount + 1);
    }
    return freq;
}