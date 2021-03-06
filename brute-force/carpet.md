## 문제 파악

1. 입력: 갈색 격자 수, 노란색 격자 수 / 출력: [카펫의 가로, 카펫의 세로]
2. 가로 길이 >= 세로 길이
3. yellow 가 가운데 채워지려면 n(가로길이)\*m(세로길이)의 형태이다.
4. brown 은 테두리로 채워지기 때문에 (n + m + 2)\*2로 계산된다.

## 해결 방안 1

1. yellow의 약수를 배열에 담아준다.
2. 약수의 짝(index 앞과 뒤가 한쌍이 된다. **짝수 개수가 홀수 인 경우 체크!**)
3. 약수의 각 짝에 해당하는 brown의 개수를 구해 조건에 맞는 개수를 찾는다.(yellow+brown(전체 격자 개수 중 yellow를 제외하고 남는 개수로 체크))
4. 조건에 해당하는 짝을 찾으면 answer 배열에 각각 가로, 세로 길이를 넣어준다.

## 해결 방안 2

1. 전체 격자 수의 약수를 구한다.
2. (가로-2)\*(세로-2) = yellow를 찾는다.
3. 해당 조건에 맞는 값을 answer에 넣어준다.

## 신경쓸 부분

- 이용하려는 데이터의 자료형을 정확히 확인하자.
- 잠깐의 계산을 위해 필요한 데이터는 굳이 저장할 필요가 없다.

## Reference Code

```js
function solution(brown, yellow) {
  var answer = [];
  for (var i = 3; i <= (brown + yellow) / i; i++) {
    var x = Math.floor((brown + yellow) / i);
    if ((x - 2) * (i - 2) === yellow) {
      break;
    }
  }

  return [x, i];
}
```
