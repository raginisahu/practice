/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */https://leetcode.com/problems/maximum-depth-of-binary-tree/submissions/
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
   if(!root)
       return 0
   else if(root.val == null)
        return 1
    else return depth(root, 0)
   
    function depth(root ,d) {
      if(!root)
          return d
       else if(root.val == null) {
           return d + 1
       }
       else return Math.max(depth(root.left,d+1),depth(root.right,d+1))
    }
}
