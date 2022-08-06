function solution(id) {
  let answer = id;
  const maskingLength = Math.floor(id.length / 2);
  const start = Math.floor(maskingLength / 2);
  const end = start + maskingLength;

  for (let i = start; i < end; i++) {
    answer = answer.replace(id.substring(i, i + 1), "*");
  }
  return answer;
}
