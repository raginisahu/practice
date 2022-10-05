/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 https://leetcode.com/problems/same-tree/
 */
var isSameTree = function(p, q) {
    if(p && q && p.val != null && q.val != null) {
        return traverse(p,q)
    }
    else {
        if(p == q)
        return true  
        else return false 
    }
    function traverse(p,q) {
        console.log("p and q",p,q)
        if(p && q) {
           if(p.val == q.val) {
                return(traverse(p.left, q.left) && traverse(p.right, q.right))   
            }  else return false
        } else {
            if(p == q)
            return true  
            else return false
        }
    }
};
