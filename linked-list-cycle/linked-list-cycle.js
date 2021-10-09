/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    if (!head) return false; 
    
    while(head.next) {
        if (head.val === 'visited') return true;
        head.val = 'visited';
        head = head.next;
    }
    
    return false;
};