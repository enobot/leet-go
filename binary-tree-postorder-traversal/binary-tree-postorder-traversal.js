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
var postorderTraversal = function(root) {
    const results = [];
    
    postOrderHelper(root, results);
    return results;
};

function postOrderHelper(node, results) {
    if (node === null) return;
    
    postOrderHelper(node.left, results);
    postOrderHelper(node.right, results);
    results.push(node.val);
}