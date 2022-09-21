/**
 * @param {number[]} nums
 * @return {number}
 https://leetcode.com/problems/maximum-product-subarray/
 */
var maxProduct = function(nums) {
    let countsum = - Infinity;
    let maxsum = - Infinity;
    if(nums.length == 1)
        maxsum = nums[0]
    for(let i=0 ; i<nums.length; i++) {
        countsum = nums[i];
        for(let j=i+1 ; j< nums.length; j++) {
            if(maxsum < countsum)
                maxsum = countsum
             countsum = countsum * nums[j]
        }
         if(maxsum < countsum)
                maxsum = countsum
    }
    return maxsum
};
