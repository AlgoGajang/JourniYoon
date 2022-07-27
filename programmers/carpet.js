function solution(brown, yellow) {
  let i = 1; // 1부터 시작해서 yellow의 약수를 찾는다.
  while (i < yellow + 1) {
    if (yellow % i === 0) {
      // yellow의 약수인 경우에 계산이 가능하다.
      // 약수의 짝을 찾는다. (i가 1부터 시작하므로 'i <= j' 가 된다.
      // 문제의 조건에서 '세로길이 < 가로길이'로 명시되어 있기 때문에 'j'가 가로길이가 된다.
      let j = yellow / i;
      if ((i + j + 2) * 2 === brown) {
        // 위에서 찾은 yellow를 감싸는 카펫의 개수가 brown 개수와 일치하는 경우를 찾는다.
        return [j + 2, i + 2];
      }
    }
    i++;
    continue;
  }
}
