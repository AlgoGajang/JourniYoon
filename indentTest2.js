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