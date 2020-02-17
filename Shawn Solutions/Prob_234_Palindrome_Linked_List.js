/*
  Given a singly linked list, determine if it is a palindrome.
*/

/* Solution: */

function isPalindrome(head) {
    let res = true;
    function nextNode(node) {
        // base case
        if (node == null) {
            return;
        }
        // go to the next node
        nextNode(node.next);

        // console.log(head.val, node.val);

        // as the stack unwinds, check the node's value with head's;
        // uncomment the above console log to see the node's value and the head's as the stack unwinds;
        // in this way, the head's value will be compared with values from the other end of the list
        if (head.val != node.val) {
            res = false;
        }
        head = head.next;
    }
    // start the recursion
    nextNode(head);
    return res;
}
