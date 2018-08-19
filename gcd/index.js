// const gcd = function(a, b) {
// 	if (a % b === 0) return b
// 	if (b % a === 0) return a
// 	return a < b ? gcd(a, b % a) : gcd(b, a % b)
// }

const gcd = function(a, b) {
	if (b === 0) return a
	return gcd(b, a % b)
}

const assert = require('assert')

assert.equal(gcd(1, 8), 1)
assert.equal(gcd(2, 4), 2)
assert.equal(gcd(24, 36), 12)
assert.equal(gcd(56, 49), 7)
assert.equal(gcd(1680, 640), 80)
// 0和任何数的最大公约数，是那个数；最小公倍数是0
// 需要考虑其中有一个数是0的情况， 0 % 24 = 0, 24 % 0 = NaN
assert.equal(gcd(0, 640), 640)
assert.equal(gcd(640, 0), 640)
