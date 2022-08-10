var uniquePaths = function (m, n) {
  const array = Array.from({ length: m }, () =>
    Array.from({ length: n }, () => 0)
  );
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (i > 0 && j > 0) {
        array[i][j] = array[i - 1][j] + array[i][j - 1];
      } else {
        array[i][j] = 1;
      }
    }
  }
  return array[m - 1][n - 1];
};

// Reference Code
const uniquePaths = (m, n) => {
  if (n > m) [m, n] = [n, m]; // ensure m >= n so prev row vector will consume less memory

  const prevRow = new Array(n).fill(1);
  console.log(prevRow);
  for (let i = 1; i < m; ++i)
    for (let j = 1; j < n; ++j) prevRow[j] += prevRow[j - 1];

  return prevRow[n - 1];
};
