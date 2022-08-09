/**
 * @param {number[]} nums
 * @return {number}
 */
// 1차 (틀린 시도) => 오답 원인: 배열의 마지막 값만 참고해서 비교하면 그 이전 값들과 충돌되는 경우가 발생한다.
const lengthOfLIS = (nums) => {
  let answer = [nums[0]];
  if (nums.length <= 1) return nums.length;
  for (let i = 1; i < nums.length; i++) {
    // if (answer.length === 0) answer.push(nums[i]);
    if (answer[answer.length - 1] > nums[i]) answer.pop();
    answer.push(nums[i]);
  }
  answer = [...new Set(answer)];
  return answer.length;
};

// 2차 => 변수 스코프 문제로 풀이에 시간을 많이 썼다.
const lengthOfLIS = function (nums) {
  // 이진탐색을 활용해 정렬 배열 만들기
  let increasing = [nums[0]];
  // nums 배열의 값을 순회하며 increasing 배열에 값을 넣는다.
  // 넣은 값과 크기를 비교해 위치를 잡는다.
  for (let i = 0; i < nums.length; i++) {
    let first = 0;
    let end = increasing.length - 1;
    let mid = 0;
    console.log(i);
    while (true) {
      mid = Math.floor((first + end) / 2);
      if (first > end) {
        mid = first;
        console.log("while2");
        break;
      }
      if (increasing[mid] < nums[i]) first = mid + 1;
      else end = mid - 1;
    }
    if (mid === increasing.length) increasing.push(nums[i]);
    else {
      increasing[mid] = nums[i];
    }
  }
  return increasing.length;
};

// 다른 풀이
function lengthOfLIS(nums) {
  if (!nums.length) return 0;

  let arr = new Array(nums.length).fill(1);

  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[j] < nums[i]) arr[i] = Math.max(arr[i], arr[j] + 1);
    }
  }

  return Math.max(...arr);
}
