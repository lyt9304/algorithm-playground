/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

function ListNode(val) {
	this.val = val
	this.next = null
}

var l1 = new ListNode(1)
var l2 = new ListNode(2)
var l3 = new ListNode(4)
l1.next = l2
l2.next = l3

var r1 = new ListNode(1)
var r2 = new ListNode(3)
var r3 = new ListNode(4)
r1.next = r2
r2.next = r3

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
	let resHead = null
	let resTail = null
	resHead = resTail = new ListNode(null)
	while (l1 && l2) {
		if (l1.val <= l2.val) {
			resTail.next = l1
			l1 = l1.next
		} else {
			resTail.next = l2
			l2 = l2.next
		}
		resTail = resTail.next
	}
	let left = l1 ? l1 : l2
	resTail.next = left
	return resHead.next
}
// mergeTwoLists(l1, r1)
console.log(mergeTwoLists(l1, r1))
