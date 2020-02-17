/*
  Count the number of prime numbers less than a non-negative number, n.
*/

/**
 * @param {number} n
 * @return {number}
 */

function countPrimes(n) {
    function checkPrime(number) {
        for (let i = 2; i * i <= number; ++i) {
            if (number % i == 0) {
                return false;
            }
        }
        return true;
    }
    let accum = n > 2 ? 1 : 0;
    for (let i = 3; i < n; i += 2) {
        if (checkPrime(i)) {
            ++accum;
        }
    }
    return accum;
}
