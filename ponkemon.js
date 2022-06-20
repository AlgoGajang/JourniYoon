// 풀이 1
function solution(nums) {
	let answer = 0;
	let setArray = [...new Set(nums)];
	if (nums.length / 2 <= setArray.length) {
		answer = nums.length / 2;
	} else {
		answer = setArray.length;
	}
	return answer;
}

// 풀이 2
function solution(nums) {
	let setArray = [...new Set(nums)];
	return nums.length / 2 > setArray.length ? setArray.length : nums.length / 2;
}
