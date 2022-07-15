function solution(brown, yellow) {
  var answer = [];
  // yellow의 약수 배열을 찾아준다.
  let divisor = [];
  let i = 1;
  while (i < yellow + 1) {
    if (yellow % i === 0) divisor.push(i);
    i++;
    continue;
  }
  // 약수 배열을 돌며 brown 격자 개수에 해당하는 값을 찾는다.
  for (
    let i = 0, j = divisor.length - 1;
    i < Math.ceil(divisor.length / 2);
    i++, j--
  ) {
    if ((divisor[i] + divisor[j] + 2) * 2 === brown) {
      answer.push(divisor[j] + 2, divisor[i] + 2); // 더 긴 쪽을 가로 길이로 넣어준다.
    }
  }
  return answer;
}
