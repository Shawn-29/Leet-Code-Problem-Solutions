/*
  Given a non-negative integer num, return the number of steps to reduce it to zero.
  If the current number is even, you have to divide it by 2, otherwise, you have to subtract 1 from it.
*/

/**
 * @param {number} num
 * @return {number}
 */
 
 function numberOfSteps(n) {
    let steps = 0;
    while (n > 0) {
        n = n & 1 ? n - 1 : n >>> 1;
        ++steps;
    }
    return steps;
}
