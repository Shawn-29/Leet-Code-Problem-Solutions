/*
  Write a program that outputs the string representation of numbers from 1 to n.

  But for multiples of three it should output “Fizz” instead of the number and for the multiples of five output “Buzz”.
  For numbers which are multiples of both three and five output “FizzBuzz”.
*/

/**
 * @param {number} n
 * @return {string[]}
 */

function fizzBuzz(n) {
    // return an array with n elements
    // increment i becauses we are using an index but we want to start at 1
    return Array.from({length: n}, (_, i) =>
        ((++i % 3 == 0 ? 'Fizz' : '') + (i % 5 == 0 ? 'Buzz' : '')) || i.toString(10));
}
