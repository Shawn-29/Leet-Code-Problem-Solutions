/*
  Given two strings s and t , write a function to determine if t is an anagram of s.
*/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

function isAnagram(s, t) {
    // an anagram must be the same length as the original string
    if (s.length != t.length) {
        return false;
    }
    const cache = Object.create(null);
    // record the number of occurrences of each character in s
    for (const char of s) {
        cache[char] = (cache[char] || 0) + 1;
    }
    for (const char of t) {
        // if a character in t does not exist in s, t is not an anagram of s
        if (!(char in cache)) {
            // console.log(char, 'not in cache. Aborting...');
            return false;
        }
        // decrement the count for this character
        if (--cache[char] == 0) {
            delete cache[char];
        }
    }
    // if t is an anagram of s, no more keys will exist in cache
    return !Object.keys(cache).length;
}
