function solution(today, merchantInfoList, tradeList) {
  let answer = [];
  let merchant = merchantInfoList.reduce((acc, obj) => {
    let key = obj[1];
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(obj[0]);
    return acc;
  }, {});

  let tradeAmount = tradeList.reduce((acc, obj) => {
    let key = obj[1];
    if (!acc[key]) {
      acc[key] = 0;
    }
    acc[key] += obj[0];
    return acc;
  }, {});
  for (const merchant in tradeAmount) {
    if (tradeAmount[merchant] <= 10000) {
      answer.push(merchant);
    }
  }

  // Object.keys(merchant).filter(merchant => )
  // Object.keys(tradeAmount)
  return answer;
}
// 10000원 이하 => 거래 3건 이하 => 등록일 60 이상
