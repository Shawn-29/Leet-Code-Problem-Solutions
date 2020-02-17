/*
  Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

  Symbol       Value
  I             1
  V             5
  X             10
  L             50
  C             100
  D             500
  M             1000

  For example, two is written as II in Roman numeral, just two one's added together. Twelve is written as, XII, which is simply X + II. The number twenty seven is written as XXVII, which is XX + V + II.

  Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

      I can be placed before V (5) and X (10) to make 4 and 9. 
      X can be placed before L (50) and C (100) to make 40 and 90. 
      C can be placed before D (500) and M (1000) to make 400 and 900.

  Given a roman numeral, convert it to an integer. Input is guaranteed to be within the range from 1 to 3999.
*/

/**
 * @param {string} s
 * @return {number}
 */

function romanToInt(s) {

    function replace(roman, str) {
        const regExp = new RegExp(roman, 'g'),
            // count how many times this roman numeral occurs
            numRomans = str.match(regExp),
            // remove all occurrences of this roman numeral
            replacedStr = str.replace(regExp, '');

        // return the occurrences of this roman numeral and
        // a string with all occurrences of it removed
        return [numRomans ? numRomans.length : 0, replacedStr];
    }

    const romanVals = {
        'IV': 4, 'IX': 9,
        'XL': 40, 'XC': 90,
        'CD': 400, 'CM': 900,
        'I': 1, 'V': 5, 'X': 10,
        'L': 50, 'C': 100, 'D': 500, 'M': 1000
    };

    let num = 0,
        res = [];

    for (const key of Object.keys(romanVals)) {

        res = replace(key, s);

        num += romanVals[key] * res[0];

        s = res[1];
    }

    return num;
}
