const assert = require('assert')

function bsearch(arr, target) {
	let low = 0
	let high = arr.length - 1

	while (low <= high) {
		let mid = Math.floor((low + high) / 2)

		if (arr[mid] === target) {
			if (mid === 0 || arr[mid - 1] !== target) return mid
			high = mid - 1
		} else if (arr[mid] > target) {
			high = mid - 1
		} else {
			low = mid + 1
		}
	}

	return -1
}

assert.equal(bsearch([1, 2, 2, 2, 3, 4, 5], 2), 1)
assert.equal(bsearch([2, 2, 2, 3, 4, 5], 2), 0)
assert.equal(bsearch([3, 4, 4, 5, 5, 5], 5), 3)
assert.equal(bsearch([3, 4, 4, 5, 6, 7], 6), 4)
assert.equal(bsearch([2, 3, 3, 5, 6, 7], 4), -1)
assert.equal(bsearch([2, 3, 3, 5, 6, 7], 1), -1)
assert.equal(bsearch([2, 3, 3, 5, 6, 7], 8), -1)
