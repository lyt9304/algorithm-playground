/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
	let resHead = null
	let resTail = null
	while (l1 || l2) {
		if (l1 && !l2) {
			if (!resHead) {
				// FIX: 参考index2 其实不需要管那么多，弄个空node当第一个就行了，最后返回空node的next即可
				// FIX: 可以最后再把多余的是l1还是l2算出来，加上来就行了
				resHead = resTail = l
			} else {
				resTail.next = l1
			}
			break
		}

		if (l2 && !l1) {
			if (!resHead) {
				resHead = resTail = l2
			} else {
				resTail.next = l2
			}
			break
		}

		if (l1.val <= l2.val) {
			if (!resHead) {
				resHead = resTail = l1
			} else {
				resTail.next = l1
				resTail = resTail.next // FIX: 这里resTail要换成next
			}
			l1 = l1.next // FIX: 这里lx要换成next
		} else {
			if (!resHead) {
				resHead = resTail = l2
			} else {
				resTail.next = l2
				resTail = resTail.next
			}
			l2 = l2.next
		}
	}
	return resHead
}
