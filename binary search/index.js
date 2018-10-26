const assert = require('assert')

// non-recursive
function bsearch(arr, target) {
	let low = 0
	let high = arr.length - 1

	while (low <= high) {
		let mid = Math.floor((high + low) / 2)

		if (arr[mid] === target) {
			return mid
		} else if (arr[mid] > target) {
			high = mid - 1
		} else {
			low = mid + 1
		}
	}

	return -1
}

// recursive
function bsearchRecursive(arr, target) {
	return bsearchRecursiveInternal(arr, 0, arr.length - 1, target)
}

function bsearchRecursiveInternal(arr, low, high, target) {
	let mid = Math.floor((low + high) / 2)

	if (low > high) return -1

	if (arr[mid] === target) {
		return mid
	} else if (arr[mid] > target) {
		return bsearchRecursiveInternal(arr, low, mid - 1, target)
	} else {
		return bsearchRecursiveInternal(arr, mid + 1, high, target)
	}
}

assert.equal(bsearch([1, 2, 3, 4, 5], 1), 0)
assert.equal(bsearch([1, 2, 3, 4, 5], 5), 4)
assert.equal(bsearch([1, 2, 3, 4, 5], 6), -1)

assert.equal(bsearchRecursive([1, 2, 3, 4, 5], 1), 0)
assert.equal(bsearchRecursive([1, 2, 3, 4, 5], 5), 4)
assert.equal(bsearchRecursive([1, 2, 3, 4, 5], 6), -1)
