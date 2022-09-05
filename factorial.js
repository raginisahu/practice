let number = 0
let mul = 1
function calculate(n,mul) {
	return mul*n
}

function recursion (n,mul) {
	// base case to fail the recursiton 
	if(n <= 0)  {
		console.log("we can stop the function as n value reached to the n length..... or it is zero",mul)
		return
	}	else {
		mul = calculate(n, mul)
		console.log("mul value in n",mul,n)
		// call the recursion
		recursion(n-1,mul)
	}
}

recursion(number,mul)
