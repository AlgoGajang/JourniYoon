function solution(lottos, win_nums) {
  var answer = [];
  let high =
    lottos.filter((number) => win_nums.includes(number)).length +
    lottos.filter((a) => a === 0).length;
  let low = lottos.filter((number) => win_nums.includes(number)).length;
  // 순위 산정
  high = 7 - high === 7 ? 6 : 7 - high;
  low = 7 - low === 7 ? 6 : 7 - low;
  answer.push(high, low);
  return answer;
}
