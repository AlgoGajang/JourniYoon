function orderOfPresentation(N, K) {
  let assist = Array.from({ length: N }, (v, i) => i + 1);
  let answer = 0;
  const factorial = (n) => {
    if (n <= 1) return n;
    return n * factorial(n - 1);
  };
  for (let i = 0; i < N; i++) {
    let counter = 0;
    for (const elem of assist) {
      if (elem < K[i]) {
        counter++;
      }
    }
    assist.splice(assist.indexOf(K[i]), 1);
    if (counter !== 0) {
      answer += counter * factorial(N - i - 1);
    }
  }

  return answer;
}
