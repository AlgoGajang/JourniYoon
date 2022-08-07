function solution(arr, divisor) {
  var answer = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % divisor) continue;
    answer.push(arr[i]);
  }
  return answer.length === 0 ? [-1] : answer.sort((a, b) => a - b);
}
