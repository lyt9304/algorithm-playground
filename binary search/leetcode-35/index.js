const assert = require('assert')

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
	var low = 0
	var high = nums.length - 1
	var middle
	var targetIndex = null

	while (low <= high) {
		middle = Math.floor((low + high) / 2)
		var numMiddle = nums[middle]

		if (target === numMiddle) {
			targetIndex = middle
			break
		} else if (target < numMiddle) {
			high = middle - 1
		} else {
			low = middle + 1
		}
	}

	targetIndex = targetIndex || middle
	targetIndex = nums[targetIndex] >= target ? targetIndex : targetIndex + 1

	return targetIndex
}

assert.equal(searchInsert([1, 3, 5, 6], 5), 2)
assert.equal(searchInsert([1, 3, 5, 6], 2), 1)
assert.equal(searchInsert([1, 3, 5, 6], 7), 4)
assert.equal(searchInsert([1, 3, 5, 6], 0), 0)
