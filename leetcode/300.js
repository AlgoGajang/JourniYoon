/**
 * @param {number[]} nums
 * @return {number}
 */
const lengthOfLIS = (nums) => {
  const binarySearch = (array, target, high) => {
    let low = 0;
    while (low <= high) {
      let mid = Math.floor((low + high) / 2);
      if (target === array[mid]) return mid;
      else if (target < array[mid]) high = mid - 1;
      else low = mid + 1;
    }
    return 0;
  };
  if (nums.length <= 1) return nums.length;
  for (let i = 1; i < nums.length; i++) {
    if (answer.length === 0) answer.push(nums[i]);
    if (answer[answer.length - 1] > nums[i]) answer.pop();
    answer.push(nums[i]);
    console.log(answer);
  }
  console.log(answer);
  return answer.length;
};
