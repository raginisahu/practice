//longest palindrome string 

let a=[];
let str="aasaakl"
let max=0;
for(let l=0; l<str.length; l++) {
console.log("inaide the for loop");
let i=0; j=l;
	while(i <= str.length-1 && j <= str.length-1){
		console.log("while loop****",i,j);
		if(j == i) {
			a[i] = []
			a[i][j]= 1
		}
		else if( l == 1){
			if(str[i] === str[j]) 
				a[i][j] = 1
			else a[i][j] = 0
		}
		else {
		  console.log("inside the else condition",str[i],str[j],a[i][j-1])
		  if(str[i] == str[j] && a[i+1][j-1] == 1 ) {
			let leng = j-i
			a[i][j]= 1
			if(max> leng) max == leng
		} else  {
			a[i][j] = 0
		}
	}
	console.log("l lenght array",a, l)
	i++
	j++
}		
}

console.log("max",max)