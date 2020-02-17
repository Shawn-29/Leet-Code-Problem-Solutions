/*
  Given a non negative integer number num, for every numbers i in the range 0 <= i <= num,
  calculate the number of 1's in their binary representation and return them as an array.
*/

/**
 * @param {number} num
 * @return {number[]}
 */
 
function countBits(num) {
    /*
        Goes through as many iterations as there are set bits.
        Algorithm source: http://graphics.stanford.edu/~seander/bithacks.html#CountBitsSetKernighan
    */
    const res = new Uint32Array(num + 1);
    let temp = 0;
    for (let i = 0; i <= num; ++i) {
        temp = i;
        while (temp) {
            // the number still has at least 1 bit set so increment the accumulator
            ++res[i];
            // for example, 5 ANDed with 4 is 4; then 4 ANDed with 3 is 0, so the while loop ends;
            // so 5 has 2 1 bits
            temp &= temp - 1;
        }
    }
    return res;
}
