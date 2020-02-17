/*
  Given the array arr of positive integers and the array queries where queries[i] = [Li, Ri],
  for each query i compute the XOR of elements from Li to Ri (that is, arr[Li] xor arr[Li+1] xor ... xor arr[Ri] ).
  Return an array containing the result for the given queries. 
*/

/**
 * @param {number[]} arr
 * @param {number[][]} queries
 * @return {number[]}
 */
 
function xorQueries(arr, queries) {
  const result = new Uint32Array(queries.length);
  let i = 0;
  for (const q of queries) {
      // xor the range of q[0] to q[1] and store it in result [i]
      for (let z = q[0]; z <= q[1]; ++z) {
          result[i] ^= arr[z];
      }
      ++i;
  }
  return result;
}
