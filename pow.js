/*
find out the power or any number where x is the number and n is power

*/

/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    console.log("x",x,"n",n)
    let pow;
    if(n==0 || x==1 || x == -1 && n>0 ) {
        console.log("if")
        return x== -1 ? -1 : 1
    } else if((x == -1 &&  n<0)) {
      console.log("indiex minus ", -x)
        return (-x)
    } 
        
    else if(x<0.0001 && x>-0.0001 ){
        console.log("inside x condition")
        return 0
    }
    else if(n > 0.9 )
      pow = x 
    else pow =( 1/x)
    
    for(let i=1; i<Math.abs(n);i++) {
      if(n >0)
       pow= (pow*x)
      else 
         pow = (pow/x)
    }
    return pow
};
