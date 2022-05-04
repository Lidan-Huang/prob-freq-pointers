"use strict";

/**Accepts two strings, 
 * return true, if first string is a subsquence of the second string, the same order
 * otherwise, return false
 */ 

function isSubsequence(subsquence, str) {
  let seqIdx = 0;

  for (const letter of str) {
    if (letter === subsquence[seqIdx]) seqIdx++;
  }

  return seqIdx === subsquence.length;
}
