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
var l3 = new ListNode(3)
var l4 = new ListNode(4)
var l5 = new ListNode(5)
l1.next = l2
l2.next = l3
l3.next = l4
l4.next = l5

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
	let prev = null
	let cur = head

	while (cur) {
		let tmp = cur
		cur = cur.next
		tmp.next = prev
		prev = tmp
	}

	return prev
}

let list = reverseList(l1)

while (list) {
	console.log(list.val)
	list = list.next
}
