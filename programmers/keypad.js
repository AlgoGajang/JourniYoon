function solution(numbers, hand) {
  var answer = "";

  const keypad = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    ["*", 0, "#"],
  ];
  let left = "*";
  let right = "#";

  // 현재지점(x1, y1)에서 목표지점(x2, y2)까지의 거리를 구한다.
  const getDistance = function (from, to) {
    const [x1, y1] = convertKeypad[from];
    const [x2, y2] = convertKeypad[to];
    return Math.abs(x1 - x2) + Math.abs(y1 - y2);
  };
  // keypad를 좌표로 변환한다.
  const convertKeypad = keypad.reduce((acc, prev, x) => {
    prev.forEach((number, y) => {
      acc[number] = [x, y];
    });
    return acc;
  }, {});
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 3 === 1) {
      left = numbers[i];
      answer += "L";
    }
    if (numbers[i] !== 0 && numbers[i] % 3 === 0) {
      right = numbers[i];
      answer += "R";
    }
    if (numbers[i] % 3 === 2 || numbers[i] === 0) {
      const leftMove = getDistance(left, numbers[i]);
      const rightMove = getDistance(right, numbers[i]);
      if (leftMove < rightMove || (leftMove === rightMove && hand === "left")) {
        left = numbers[i];
        answer += "L";
      } else {
        right = numbers[i];
        answer += "R";
      }
    }
  }
  return answer;
}
