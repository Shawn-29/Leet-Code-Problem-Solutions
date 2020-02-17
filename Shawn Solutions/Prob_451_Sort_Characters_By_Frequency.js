/*
  Given a string, sort it in decreasing order based on the frequency of characters.
*/

/**
 * @param {string} s
 * @return {string}
 */

function frequencySort(s) {
    const cache = Object.create(null);
    
    // count the occurrences of each character
    for (const char of s) {
        cache[char] = (cache[char] || 0) + 1;
    }
    
    // return a sorted string of characters based on their number of occurrences;
    // if two characters both occur the same amount (cache[b] - cache[a] will equal 0);
    // the one with higher numeric value comes first
    return [...s].sort((a, b) => cache[b] - cache[a] || b.charCodeAt(0) - a.charCodeAt(0));
}
