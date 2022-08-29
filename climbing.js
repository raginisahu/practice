/*
You are climbing a staircase. It takes n steps to reach the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
*/

var climbStairs = function(n) {
    let a=[];
    a.push(1)
    a.push(1)
    for(let i=2; i<=n; i++) 
        a.push(a[i-1]+a[i-2])
    return a[n]
};
