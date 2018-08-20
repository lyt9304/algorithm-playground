/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
	var queue1 = [p]
	var queue2 = [q]

	while (queue1.length || queue2.length) {
		var item1 = null
		if (queue1.length) {
			item1 = queue1.shift()
			if (item1) {
				queue1 = queue1.concat(item1.left, item1.right)
			}
		}
		var item2 = null
		if (queue2.length) {
			item2 = queue2.shift()
			if (item2) {
				queue2 = queue2.concat(item2.left, item2.right)
			}
		}

		if (item1 !== item2) {
			if ((item1 && !item2) || (item2 && !item1)) return false
			if (item1.val !== item2.val) return false
		}
	}

	return true
}
