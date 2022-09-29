/**
 * @param {number[]} nums
 * @return {number}
 */
// https://leetcode.com/problems/longest-increasing-subsequence/
var lengthOfLIS = function(nums) {
    const a = []
    let i=0;
    let max= 1
    while(i<nums.length){
        a.push(1)
        i++
    }
    for(i=1; i<nums.length; i++) {
        let j=0
        while(j<i){
            if(nums[j]<nums[i]) {
                if(a[i] <= a[j]) 
                  a.splice(i,1,a[j] + 1)  
                j++
            } else
                j++
        }
        max = Math.max(a[i],a[i-1],max)
    }
    return max
};
