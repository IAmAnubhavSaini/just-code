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
 * @return {TreeNode}
 */
var upsideDownBinaryTree = function (root) {
    if (!root || !root.left) {
        return root;
    }
    const stack = [];
    let current = root;
    while (current) {
        stack.push(current);
        current = current.left;
    }
    current = stack.pop();
    const newRoot = current;
    while (stack.length > 0) {
        let parent = stack.pop();
        current.left = parent.right;
        current.right = parent;
        parent.left = null;
        parent.right = null;
        current = parent;
    }
    return newRoot;
};

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
 * @return {TreeNode}
 */
var upsideDownBinaryTree = function (root) {
    if (!root || !root.left) {
        return root;
    }
    const newRoot = upsideDownBinaryTree(root.left);
    root.left.left = root.right;
    root.left.right = root;
    root.left = null;
    root.right = null;
    return newRoot;
};
