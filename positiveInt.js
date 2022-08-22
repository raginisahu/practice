//
Given an unsorted integer array nums, return the smallest missing positive integer.

You must implement an algorithm that runs in O(n) time and uses constant extra space.
//

var firstMissingPositive = function(nums) {
    let setData = new Set(nums)
    for(i=1; i<=setData.size; i++) {
        if(!setData.has(i)) 
         return i 
    }
    return setData.size + 1
};
