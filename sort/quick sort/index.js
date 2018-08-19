const qsort = function(nums) {
	// 递归基线条件
	if (nums.length < 2) return nums
	const pivot = nums[0]
	const pivots = nums.filter(num => num === pivot)
	const left = nums.filter(num => num < pivot)
	const right = nums.filter(num => num > pivot)
	return qsort(left).concat(pivots, qsort(right))
}

console.log(qsort([9, 8, 7, 6]))
console.log(qsort([6, 8, 7, 6]))
