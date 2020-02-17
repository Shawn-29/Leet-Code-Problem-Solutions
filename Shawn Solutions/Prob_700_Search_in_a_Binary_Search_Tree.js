/*
  Given the root node of a binary search tree (BST) and a value,
  you need to find the node in the BST that the node's value equals the given value.
  Return the subtree rooted with that node. If such node doesn't exist, you should return NULL.
*/

/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
 
 function searchBST(root, val) {
    /*
      if the curent node (root) is null or its value is equal to the
      one we a looking for, return it; otherwise, recursively move to
      the next node; if the current node's value is higher than val,
      then we look go to the left node as the left nodes have lesser values
    */
    return root == null || root.val == val ? root :
        searchBST(root.val > val ? root.left : root.right, val);
}
