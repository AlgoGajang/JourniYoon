function solution(amounts) {
  const regex = /[^0-9]/g;
  const removeWon = amounts.map((amount) => amount.replace(regex, ""));
  const changeType = removeWon.map((amount) => Number(amount));
  const answer = changeType.reduce((prev, curr) => prev + curr, 0);
  return answer;
}
