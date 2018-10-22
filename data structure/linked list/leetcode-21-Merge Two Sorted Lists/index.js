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

// var l1 = new ListNode(1)
// var l2 = new ListNode(2)
// var l3 = new ListNode(4)
// l1.next = l2
// l2.next = l3

// var r1 = new ListNode(1)
// var r2 = new ListNode(3)
// var r3 = new ListNode(4)
// r1.next = r2
// r2.next = r3

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
	// 使用带头链表可以极大的简化头尾边界判断
	let head = new ListNode()
	let tail = head

	while (l1 && l2) {
		if (l1.val <= l2.val) {
			tail.next = l1
			tail = l1
			l1 = l1.next
		} else {
			tail.next = l2
			tail = l2
			l2 = l2.next
		}
	}

	if (l1) {
		tail.next = l1
	}

	if (l2) {
		tail.next = l2
	}

	return head.next
}

// let list = mergeTwoLists(l1, r1)

// do {
// 	console.log(list.val)
// 	list = list.next
// } while (list)
