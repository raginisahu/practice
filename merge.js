const a = [13,2,3,4,5,6,19]
let mid = Math.floor(a.length/2)

mergeSort(a)
console.log("function started *****",mid)
// mergeSort(mid+1, a.length-1, a)

function mergeSort(a) {
	console.log('a',a)
	if(a.length <= 1) {
			return a
		} 
		mid = Math.floor(a.length/2)
		let lefta = a.slice(0,mid)
		console.log("inside the merge l",lefta)
		let righta =a.slice(mid)
		console.log("inside the merge r",righta)
		let ma = merge( lefta, righta)
		console.log("after merge sort",ma) 
		return merge(mergeSort(lefta), mergeSort(righta))
}


function merge(l,m) {
  console.log("inside the merge",l,m)
   let i=0, j=0;
   const ma=[]
   	while(i < l.length && j<m.length) {
	   if(l[i] < m[j]) {
		  ma.push(l[i])
		  i++
		}
		else {
			ma.push(m[j])
			j++		
		}
	}

	while(i<l.length) {
	 ma.push(l[i])
	 i++
	}

	while(j<m.length) {
	  ma.push(m[j])
	  j++
	}

   console.log("returning to the function ending merge******",ma)
   return ma
}
