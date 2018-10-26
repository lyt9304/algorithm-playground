const assert = require('assert')

function bsearch(arr, target) {
	let low = 0
	let high = arr.length - 1

	while (low <= high) {
		let mid = Math.floor((low + high) / 2)

		if (arr[mid] >= target) {
			if (mid === 0 || arr[mid - 1] < target) return mid
			high = mid - 1
		} else {
			low = mid + 1
		}
	}

	return -1
}

assert.equal(bsearch([3, 4, 6, 7, 10], 6), 2)
assert.equal(bsearch([3, 4, 6, 7, 10], 4), 1)
assert.equal(bsearch([3, 4, 6, 7, 10], 5), 2)
assert.equal(bsearch([3, 4, 6, 7, 10], 11), -1)
assert.equal(bsearch([3, 4, 6, 7, 10], 2), 0)
