/**

Find out the height of tree

**/

 function findHeight(root){
        if(root == null) 
            return 0
        let left = findHeight(root.left);
        let right = findHeight(root.right);
        let lh = left + 1
        let lr = right +1
        let maxh = Math.max(lh,lr)
        console.log(maxh,"max height",lh,"left height", lr,"right height")
        return maxh
    }
  let h=  findHeight(root)
