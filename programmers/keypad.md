## 문제 파악

1. 왼손[1,4,7], 오른손[3,6,9]으로 정해져있다.
2. 가운데[2,5,8,0]를 어느 손으로 누를 것인가가 핵심이다.
3. 각각의 손가락 위치를 포인터로 설정해야 한다.

## 해결 방안

1. 키패드 위치에서 [2,5,8,0]까지의 거리를 객체로 담아두고 비교한다.
2. 현재 손의 위치를 확인하기 위해 위치가 변경될 때마다 포인터를 변경해준다.

## 어려웠던 부분

- 거리 계산을 수동으로 해뒀지만 다른 방법이 있을 것 같다.
- "\*", "#"에서 바로 [2,5,8,0]으로 위치를 옮길 수도 있다.

## 보충할 부분

- 맨해튼 거리

## Reference Code

```js
function solution(numbers, hand) {
  const calcDistance = (from, to) => {
    const [fromX, fromY] = keypad[from];
    const [toX, toY] = keypad[to];
    return Math.abs(fromX - toX) + Math.abs(fromY - toY);
  };
  const realKeypad = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    ["*", 0, "#"],
  ];
  const keypad = realKeypad.reduce((acc, row, x) => {
    // 2차원 키패드 배열을 좌표로 변환
    row.forEach((number, y) => (acc[number] = [x, y]));
    return acc;
  }, {});
  let left = "*",
    right = "#"; // 현재 손가락 위치

  return numbers.reduce((answer, num) => {
    if (num === 1 || num === 4 || num === 7) {
      // 1, 4, 7번 => 왼손
      left = num;
      answer += "L";
    } else if (num === 3 || num === 6 || num === 9) {
      // 3, 6, 9번 => 오른손
      right = num;
      answer += "R";
    } else {
      // 0, 2, 5, 8번 => 가까우면서 주사용손
      const lDist = calcDistance(num, left);
      const rDist = calcDistance(num, right);
      if (lDist < rDist || (lDist === rDist && hand === "left")) {
        left = num;
        answer += "L";
      } else if (lDist > rDist || (lDist === rDist && hand === "right")) {
        right = num;
        answer += "R";
      }
    }
    return answer;
  }, "");
}
```
