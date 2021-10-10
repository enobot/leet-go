/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
    let slow = head, fast = head;
    if(!head || !head.next) return;
    
    //separate into two lists after splitting down the middle
    while(fast.next && fast.next.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    let list2 = slow.next;
    slow.next = null;
    
    
    //reverse list2
    let curr = list2;
    let prev = null;
    while(curr) {
        let currNext = curr.next;
        curr.next = prev;
        prev = curr;
        curr = currNext;
    }
    list2 = prev;
    
    //merge
    while(head && list2) {
        let p1 = head.next;
        let p2 = list2.next
        head.next = list2;
        head.next.next = p1;
        list2 = p2;
        head = p1;
    }
    
    return head;
};