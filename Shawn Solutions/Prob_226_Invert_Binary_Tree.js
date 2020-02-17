/*
  Invert a binary tree.
*/

/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
 
 function invertTree(root) {
    let temp = null;
    function swapNodes(left, right) {
        // swap the nodes
        temp = root.left;
        root.left = root.right;
        root.right = temp;

        // branch to the left of the current node
        invertTree(root.left);
        // branch to the right of the current node
        invertTree(root.right);
    }
    // if this node is valid, swap its nodes
    if (root) {
        swapNodes(root.left, root.right);
    }
    return root;
}
