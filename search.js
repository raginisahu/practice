/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */https://leetcode.com/problems/search-a-2d-matrix/
var searchMatrix = function(matrix, target) {
    
    /* To get the a[i][j] in which our target element exit*/
    function getTargetRow(target) {
        for(let i=0 ; i< matrix.length-1; i++) {
            console.log(i)
            if(target ==  matrix[i][0] || target == matrix[i+1][0])
                return true
            else if(target > matrix[i][0] && target < matrix[i+1][0])
                return matrix[i]
            else if(target > matrix[i+1][0] && target <= matrix[i+1][matrix[i+1].length-1]) {
                return matrix[i+1]
}
                console.log("i",matrix[i+1][0],matrix[i+1][matrix[i+1].length-1])
        }
        return false
    }
    
    /* Binary search */
    function bst(a) {
        console.log("a",a)
        if(a.length <= 1){
            if(a[0] == target)
            return true
            else return false
        }
        let mid = Math.floor((a.length-1)/2)
        console.log("mid",mid)
        if(a[mid] == target) {
            console.log("inside if block")
            return true
        }
        else if(target< a[mid]) {
            console.log("inside else if block")
            let left = a.splice(0, mid+1)
            return bst(left)
        } else {
            console.log("inside else block")
            let right = a.splice(mid+1, a.length)
            return bst(right)
        }    
    }
    if(matrix.length > 1)
    var rowMatrix = getTargetRow(target)
    else 
    var rowMatrix = matrix[0]
    console.log("rowmatrix",rowMatrix)
    if(rowMatrix && rowMatrix.length >0)
    return bst(rowMatrix)
    else return rowMatrix
};
