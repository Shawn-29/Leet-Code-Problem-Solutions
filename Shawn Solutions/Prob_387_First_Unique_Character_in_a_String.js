/*
  Given a string, find the first non-repeating character in it and return its index. If it doesn't exist, return -1. 
*/

/**
 * @param {string} s
 * @return {number}
 */

function firstUniqChar(s) {
    const cache = Object.create(null);
    let curChar = '';
    
    // store a count of each character and the index at which it first appears in the string
    for (let i = 0, len = s.length; i < len; ++i) {
        curChar = s[i];
        if (cache[curChar] == undefined) {
            cache[curChar] = [1, i];
        }
        else {
            ++cache[curChar][0];
        }
    }
    
    // return the position of the first character with a count of 1, meaning its unique
    for (const elem of Object.values(cache)) {
        if (elem[0] == 1) {
            return elem[1];
        }
    }
    return -1;
}
