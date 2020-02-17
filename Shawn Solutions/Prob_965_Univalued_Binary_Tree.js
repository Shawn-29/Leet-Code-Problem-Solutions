/*
  A binary tree is univalued if every node in the tree has the same value.

  Return true if and only if the given tree is univalued.
*/

/* Solution: */

function isUnivalTree(root) {
    function traverseTree(node) {
        if (!node) {
            return true;
        }
        if (root.val != node.val) {
            return false;
        }
        return traverseTree(node.left) && traverseTree(node.right);
    }
    return traverseTree(root);
}
