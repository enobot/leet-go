/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    const result = [];
    
    traverseLevels(root, 0, result);
    return result;
};

function traverseLevels(root, level, result) {
    if (root === null) {
        return
    } else {
        if (result.length <= level) {
            result[level] = [];
        } 
        
        result[level].push(root.val)
        traverseLevels(root.left, level + 1, result);
        traverseLevels(root.right, level + 1, result);
    }
}