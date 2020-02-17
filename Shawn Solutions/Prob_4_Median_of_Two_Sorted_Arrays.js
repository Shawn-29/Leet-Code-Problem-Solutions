/*
  There are two sorted arrays nums1 and nums2 of size m and n respectively.

  Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).

  You may assume nums1 and nums2 cannot be both empty.
*/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */

function findMedianSortedArrays(nums1, nums2) {

    const temp = nums1.concat(nums2).sort((a, b) => a - b), // merge the two arrays together
        midIndex = temp.length >>> 1; // get the middle index
        
    // find the median value of the merged array, returned as a double
    return temp.length & 1 ? temp[midIndex] : (temp[midIndex] + temp[midIndex - 1]) * .5;
}
