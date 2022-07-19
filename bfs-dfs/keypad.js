function solution(numbers, hand) {
  var answer = "";
  // 각 키패드에서 가운데 키패드[2,5,8,0]까지의 거리
  // [0,1,2,3,4,5,6,7,8,9,*,#]이다.
  const move = {
    2: [3, 1, 0, 1, 2, 1, 2, 3, 2, 3, 4, 4],
    5: [2, 2, 1, 2, 1, 0, 1, 2, 1, 2, 3, 3],
    8: [1, 3, 2, 3, 2, 1, 2, 1, 0, 1, 2, 2],
    0: [0, 4, 3, 4, 3, 2, 3, 2, 1, 2, 1, 1],
  };
  let left = 10,
    right = 11; // 손가락 포인터

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === 1 || numbers[i] === 4 || numbers[i] === 7) {
      left = numbers[i];
      answer += "L";
    }
    if (numbers[i] === 3 || numbers[i] === 6 || numbers[i] === 9) {
      right = numbers[i];
      answer += "R";
    }
    if (
      numbers[i] === 2 ||
      numbers[i] === 5 ||
      numbers[i] === 8 ||
      numbers[i] === 0
    ) {
      const leftMove = move[numbers[i]][left];
      const rightMove = move[numbers[i]][right];
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
