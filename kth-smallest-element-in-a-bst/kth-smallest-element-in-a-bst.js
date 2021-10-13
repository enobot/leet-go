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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    let nodes = [];
    
    traverseTree(root, nodes);
    return nodes[k - 1];
};

function traverseTree(root, nodes) {
    if (root === null) return;
    
    traverseTree(root.left, nodes);
    nodes.push(root.val);
    traverseTree(root.right, nodes);
}


