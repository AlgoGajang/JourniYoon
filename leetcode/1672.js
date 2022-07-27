// 풀이 1
var maximumWealth = function (accounts) {
  let accountsSum = [];
  return Math.max(
    ...accounts.map((customer) => customer.reduce((pre, cur) => pre + cur, 0))
  );
};
// 풀이 2
var maximumWealth = function (accounts) {
  let maxWealthSoFar = 0;
  for (const account of accounts) {
    let currCustomerSum = 0;
    for (const money of account) {
      currCustomerSum += money;
    }
    return Math.max(maxWealthSoFar, currCustomerSum);
  }
};
