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
// l5.next = l3

// 思路就是跑的快的人只有在跑圈的时候回套圈，不然就永远甩开了跑的慢的人
// 判断是不是套圈了，就能判断是否有环

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
	if (!head) return false
	let p1 = head
	let p2 = head

	while (p2) {
		for (let i = 0; i < 2; i++) {
			p2 = p2.next
			if (!p2) return false
			if (p2 === p1) return true
		}
		p1 = p1.next
	}

	return false
}

console.log(hasCycle(l1))
