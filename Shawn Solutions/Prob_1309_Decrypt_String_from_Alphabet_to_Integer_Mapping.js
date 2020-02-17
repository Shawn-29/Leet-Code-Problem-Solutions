/*
  Given a string s formed by digits ('0' - '9') and '#' . We want to map s to English lowercase characters as follows:

      Characters ('a' to 'i') are represented by ('1' to '9') respectively.
      Characters ('j' to 'z') are represented by ('10#' to '26#') respectively. 

  Return the string formed after mapping.

  It's guaranteed that a unique mapping will always exist.
*/

/**
 * @param {string} s
 * @return {string}
 */
 
 function freqAlphabets(s) {

    const chars = 'abcdefghijklmnopqrstuvwxyz',
        charMap = Object.create(null);

    // map an integer key to each character
    // keys past nine have a # appended on the end
    for (let i = 1, len = chars.length; i <= len; ++i) {
        charMap[String(i) + (i > 9 ? '#' : '')] = chars[i - 1];
    }

    let decryptedMsg = '',
        key = '';

    for (let i = s.length - 1; i >= 0; --i) {
        if (s[i] == '#') {

            // if a # is encountered, the key is the hash
            // combined with the previous two numbers
            key = s[i - 2] + s[i - 1] + s[i];
            i -= 2;
        }
        else {
            key = s[i];
        }

        decryptedMsg = charMap[key] + msg;
    }

    return decryptedMsg;
}
