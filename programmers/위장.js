function solution(clothes) {
  var answer = 1;
  let clothe = {};

  for (const item of clothes) clothe[item[1]] = (clothe[item[1]] || 0) + 1;
  for (const item in clothe) answer *= clothe[item] + 1;
  return answer - 1;
}
