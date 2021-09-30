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
var inorderTraversal = function(root) {
    var inOrderResults = [];
    
    inOrderTraversal(root, inOrderResults);
    
    return inOrderResults;
};

function inOrderTraversal(node, results) {
    if (node === null) return;
    
    inOrderTraversal(node.left, results);
    results.push(node.val);
    inOrderTraversal(node.right, results);
}