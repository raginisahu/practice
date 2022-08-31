/ *
Given two non-negative integers, num1 and num2 represented as string, return the sum of num1 and num2 as a string.

You must solve the problem without using any built-in library for handling large integers (such as BigInteger). You must also not convert the inputs to integers directly.

 

Example 1:

Input: num1 = "11", num2 = "123"
Output: "134"
Example 2:

Input: num1 = "456", num2 = "77"
Output: "533"
Example 3:

Input: num1 = "0", num2 = "0"
Output: "0"
 

Constraints:

1 <= num1.length, num2.length <= 104
num1 and num2 consist of only digits.
num1 and num2 don't have any leading zeros except for the zero itself. */

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
    let sum = ""
    let rem =0 ;
    let num1position = num1.length -1
    let num2position = num2.length -1
    while(num2position >= 0 && num1position >= 0) {
        let digit1 = num1.charCodeAt(num1position) - 48
        let digit2 = num2.charCodeAt(num2position) - 48
        let sump = digit1 + digit2+rem
        if(sump >= 10) {
            rem = 1
            sump = sump - 10
        } else rem = 0
        sum =  sump+sum
        num1position --
        num2position --
    }
    while(num1position >= 0) {
        let digit = num1.charCodeAt(num1position) - 48
        let sump = digit +rem 
         if(sump >= 10) {
            rem = 1
            sump = sump - 10
        } else rem = 0
        sum =  sump + sum
        num1position --
    } 
    while( num2position >= 0 ) {
        let digit = num2.charCodeAt(num2position) - 48
        let sump = digit +rem 
         if(sump >= 10) {
            rem = 1
            sump = sump - 10
        } else rem = 0
        sum =  sump + sum
        num2position --
    }
    if(num1position <0 && num2position < 0 && rem !=0) {
        sum = rem + sum
    }
   
    return sum
};
