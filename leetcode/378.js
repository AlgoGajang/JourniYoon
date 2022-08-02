var kthSmallest = function (matrix, k) {
  const flatAndSort = matrix.flat().sort((a, b) => a - b);
  if (k - 1 < 0) flatAndSort[0];
  return flatAndSort[k - 1];
};
