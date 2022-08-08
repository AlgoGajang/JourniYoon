function fibonacci(n) {
  let memo = [0, 1]; // memoization
  const miniFibo = (n) => {
    if (memo[n] !== undefined) return memo[n]; // 이미 계산된 값을 꺼내준다.
    memo[n] = miniFibo(n - 1) + miniFibo(n - 2); // 계산된 값이 없다면 계산해서 memo에 넣어준다.
    return memo[n];
  };
  return miniFibo(n);
}
