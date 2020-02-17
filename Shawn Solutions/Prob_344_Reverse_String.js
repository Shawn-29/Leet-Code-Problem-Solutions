/*
  Write a function that reverses a string. The input string is given as an array of characters char[].

  Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

  You may assume all the characters consist of printable ascii characters.
  
  Note: the parameter, s, is not a string object but instead an array of characters.
*/

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
 
function reverseString(s) {
    /* Solution #1 - call the built-in, in-place array reverse method */
    // s.reverse();

    /* Solution #2 - faster than Solution #1 as only half the array is iterated through but uses more memory for storage */
    for (let i = 0, temp = '', len = s.length - 1, halfLen = Math.round(len * .5); i < halfLen; ++i) {
        temp = s[i];
        s[i] = s[len - i];
        s[len - i] = temp;
    }      
}
