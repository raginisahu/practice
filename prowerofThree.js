/* Given an integer n, return true if it is a power of three. Otherwise, return false.

An integer n is a power of three, if there exists an integer x such that n == 3x.

 

Example 1:

Input: n = 27
Output: true
Example 2:

Input: n = 0
Output: false
Example 3:

Input: n = 9
Output: true */

/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
    if(n == 1) 
       return true
    if(n%3 == 0 && n!=0 && queueRoot(n))
       return true
     else
       return false
    
    function queueRoot(n) {
        for(let i=1; i<=Math.floor(n/3);i++) {
            let power = Math.pow(3,i)
            if(power == n) 
                return true;
            if(power > n) {
                return false
            }
        }    
    }
}

