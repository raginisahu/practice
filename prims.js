// to find the minimum spanning tree we use the prims algorithm


const a = [[0,1,0,5],[1,0,2,0],[4,2,0,3]]
console.log("array a",a)

let distance = [0,1000,1000,1000]
let parent = [-1,'f','f','f']
let mstmap = [0,'f','f','f']


for(let i=0; i< a.length ;i ++) {
	for(let j=0; j< a[i].length; j++) {
		if(a[i][j] && !mstmap.includes(a[i][j])) {
			// check minimum fo distance and current distance and reassign the distance
			let min = Math.min(distance[j],a[i][j])
			 distance.splice(j,1,min)
			 console.log("distance at i",distance,min)
			// then check the adjancency minimum distance and add into the mstmap
		}
	}
	let minObj = findmin(distance.slice(i+1,distance.length))
	console.log("minobj",minObj)
	parent[minObj.minIndex+1+i] = i
	mstmap.splice(i+1,1,minObj.min)
	console.log('parent',parent,'mstmap',mstmap)
}

function findmin(arr) {
	console.log(arr)
	let min = arr[0]
	let minIndex = 0
	for(let i=1; i<arr.length; i++) {
		if(min > arr[i]) {
			min = arr[i]
			minIndex = i
		}
		// if(arr.length-1 == i)
		// return {min:min,minIndex:minIndex}
	}
	return {min:min,minIndex:minIndex}
}
