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
 * @return {number[]}
 */
var preorderTraversal = function(root) {
    const results = [];
    
    preOrderHelper(root, results);
    
    return results;
};

function preOrderHelper(node, results) {
    if (node === null) return;
    
    results.push(node.val);
    preOrderHelper(node.left, results);
    preOrderHelper(node.right, results);
}