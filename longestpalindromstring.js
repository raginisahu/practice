function isPlandrome(s) {
let i=0, j=s.length -1; 
while( j >=i) {
		// console.log(" i and j value",i,j,s[i],s[j],s)
		if(s[i] == s[j]) {
			i++
			j-- 
		}
		else return 0
		if(i >= j) {
			return s.length
		}
	}
}


let str="saallaasshhaasshh"
let max=0
for(let i=0; i<str.length; i++) {
	for(let j=i+1; j<str.length; j++) {
	//   console.log("inside the second loop",str.slice(i,j))
	  let planlength = isPlandrome(str.slice(i,j))
	  console.log('plaindrom lengt*********',planlength,str.slice(i,j))
	  if(planlength > max)  max = planlength
	}
}

console.log("max longest string....",max)

