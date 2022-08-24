var isPowerOfThree = function(n) {
    if(n>0 && Math.pow(3, Math.floor(Math.log(n)/Math.log(3))) == n)
       return true
    else 
        return false
}


// you can change 3 to any number to check the power of any number
