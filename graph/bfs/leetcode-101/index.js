/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

// function TreeNode(val) {
// 	this.val = val
// 	this.left = this.right = null
// }

// var root = new TreeNode(1)
// var node1 = new TreeNode(2)
// var node2 = new TreeNode(2)
// root.left = node1
// root.right = node2

var isArraySymmetric = function(nums) {
	var length = nums.length
	for (var i = 0; i < length / 2; i++) {
		if (nums[i] !== nums[length - i - 1]) {
			return false
		}
	}
	return true
}

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
	var queue = [root]
	var level = 0
	var levelData = []

	var result = {
		0: [root ? root.val : null], // FIX: root(所有node)可能是null
	}
	while (queue.length) {
		// console.log(level, queue)
		while (queue.length) {
			var node = queue.shift()
			if (node) {
				levelData.push(node.left, node.right)
			}
		}
		level++
		if (levelData.length) {
			queue = queue.concat(levelData)
			if (!result[level]) result[level] = []
			result[level] = result[level].concat(
				levelData.map(node => (node ? node.val : null))
			)
		}
		levelData = [] // FIX: 每一次循环没有复原levelData导致循环无法结束
	}

	// console.log(result)

	for (var i = 0; i < level; i++) {
		if (result[i].filter(num => num !== null).length === 0) continue // FIX: 解法中会出现最后一层全部都是null
		if (!isArraySymmetric(result[i])) {
			return false
		}
	}
	return true
}

// console.log(isSymmetric(root))
