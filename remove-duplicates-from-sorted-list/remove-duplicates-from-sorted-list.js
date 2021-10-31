/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    let dummy = head;
    
    while (dummy !== null && dummy.next !== null) {
        if (dummy.next.val === dummy.val) {
            while (dummy.next !== null && dummy.next.val === dummy.val) {
                dummy.next = dummy.next.next;
            }
        }
        dummy = dummy.next; 
    }
    
    return head;
};