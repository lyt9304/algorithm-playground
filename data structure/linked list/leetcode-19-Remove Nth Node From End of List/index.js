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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
	// 改成带两个头的链表，方便后续操作
	// 有两种思路：
	// 第一种：改成带两个头的链表，防止一些边界的判断，然后指针向前移动了n+1步之后，再初始化第二个指针，然后保持相同的间隔前移
	// 第二种：改成带一个头的链表，然后第一个指针和第二个指针都指向dummy，第一个指针先向前移动n+1步，然后保持相同间隔前移
	// 一个头还是两个头也无所谓，边界怎么判断方便怎么写，都可以的
	let newHead = new ListNode()
	newHead.next = new ListNode()
	newHead.next.next = head
	let tmp = newHead

	let step = 0
	let prev = null

	while (tmp) {
		tmp = tmp.next
		if (prev) {
			prev = prev.next
		}
		step++

		if (step === n + 1) {
			prev = newHead
		}
	}

	if (prev) {
		prev.next = prev.next.next
	}

	return newHead.next.next
}

// 注意考虑只有一个结点，然后挪除倒数第一个结点的情况
// 加上带头结点，真的能简化链表的复杂度！！

let list = removeNthFromEnd(l1, 2)

while (list) {
	console.log(list.val)
	list = list.next
}
