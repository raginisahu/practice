/**
 * @param {number[]} nums
 * @return {number}
  Given an integer array nums of size n, return the minimum number of moves required to make all array elements equal.
  In one move, you can increment or decrement an element of the array by 1.
  Test cases are designed so that the answer will fit in a 32-bit integer.
 */
var minMoves2 = function(nums) {
    nums.sort(function(a,b) {return (a-b)} )
    let start =0;
    let end = nums.length -1 
    let mid = Math.floor(nums.length/2)
    let res = 0;
    while(start < end) {
        res = res + Math.abs(nums[mid] - nums[start]) + Math.abs(nums[end] - nums[mid])
        start++
        end --
    }
    return res
};
