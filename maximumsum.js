/**
Hint - check the plus should not be in minus if it is minus then it will affect the value otherwise it won't affect the value
**/

var maxProduct = function(nums) {
    let countsum = 0 ;
    let maxsum = 0;
    if(nums.length == 1)
        maxsum = nums[0]
    for(let i=0 ; i<nums.length; i++) {
        countsum = countsum + nums[i];
         if(maxsum < countsum)
                maxsum = countsum
        if(countsum < 0 )
            countsum = 0
    }
  
    return maxsum
};
