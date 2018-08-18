var min = null
var minIndex = null
var tmp

var insertionSort = function(nums) {
	for (var i = 0; i < nums.length; i++) {
		// i 是当前需要放入最小值的位置
		// 从 i 开始找到最后面为止最小的值，并将其与 i 上的数相互交换
		minIndex = i
		min = nums[minIndex]
		for (var j = i; j < nums.length; j++) {
			if (nums[j] < min) {
				minIndex = j
				min = nums[j]
			}
		}
		if (minIndex !== i) {
			tmp = nums[i]
			nums[i] = nums[minIndex]
			nums[minIndex] = tmp
		}
	}
	return nums
}

console.log(insertionSort([9, 8, 7, 6]))
console.log(insertionSort([6, 8, 7, 6]))
