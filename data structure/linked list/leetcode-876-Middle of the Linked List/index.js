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
var middleNode = function(head) {
	// 搞两种指针，一个每次走两步，一个每次走一步
	// 奇数点，最后结束的条件是p1.next === null
	// 偶数点，最后结束的条件是p1 === null
	// 所以最后操作其实是统一的，只要两个边界都覆盖到
	let p1 = head
	let p2 = head

	while (p1 !== null && p1.next !== null) {
		p1 = p1.next.next
		p2 = p2.next
	}

	return p2
}

console.log(middleNode(l1))
