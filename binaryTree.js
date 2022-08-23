// Create binary tree in javascript//

var  tree = []

// ADDING THE PARENT TO THE CHILD
const root = (index, key) =>  tree.splice(index,0,key);

const leftChild = (parent, key) => {
	if(tree[parent]) {
	   let letChild = parent * 2 + 1
		tree.splice(letChild,0, key) 
	}
	else {
		console.log("parent is not found")
	}
} 

const rightChild = (parent, key)=> {
	if(tree[parent]) {
	   	let letChild = parent * 2 + 2
		tree.splice(letChild,0, key) 
}
	else {
		console.log("parent is not found")
}
} 

const print = (tree) => {
	for(const element of tree) {
		console.log(element)
	}
}


root( 0, 'A')
console.log("after first")
print(tree)
leftChild(0,'B')
console.log("after left")
print(tree)
rightChild(0,'C')
leftChild(1,'D')
rightChild(1,'E')
leftChild(2,'F')
print(tree)


//output

/* A
B
C
D
E
F */
