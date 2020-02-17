/*
  Given an integer n, return the number of trailing zeroes in n!.
  
  Note: Your solution should be in logarithmic time complexity.
*/

/**
 * @param {number} n
 * @return {number}
 */

function trailingZeroes(n) {
    let nZeroes = 0;
    while (n >= 5) {
        n = n / 5 | 0;
        nZeroes += n;
    }
    return nZeroes;
}
