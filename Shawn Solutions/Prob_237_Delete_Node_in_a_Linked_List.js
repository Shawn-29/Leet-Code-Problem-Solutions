/*
  Write a function to delete a node (except the tail) in a singly linked list, given only access to that node.
*/

/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */

function deleteNode(node) {
    // explanation assumes a list of [4, 5, 1, 9] and input of ListNode w/ value 5 (second node)

    // nextNode references ListNode w/ value 1
    const nextNode = node.next;

    // node w/ value 5 now has value 1
    node.val = nextNode.val;

    // node.next now equals nextNode.next which is ListNode w/ value 9;
    // same as doing node.next = node.next.next
    node.next = nextNode.next;

    // node now is a reference to nextNode;
    // note that the head node of the list's next value is a reference to node,
    // so now that node references nextNode, head.next references nextNode and
    // the original node is garbage collected and thus deleted
    node = nextNode;
}
