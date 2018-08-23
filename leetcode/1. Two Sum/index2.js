/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
	const solutionMap = {}
	for (let i = 0; i < nums.length; i++) {
		// 应该先判断，再赋值，不然 6 - 3 = 3 就会很尴尬，会算到自己头上
		if (solutionMap[nums[i]] !== undefined) {
			// typeof 会导致时间变慢
			return [solutionMap[nums[i]], i]
		}
		solutionMap[target - nums[i]] = i
	}
}
