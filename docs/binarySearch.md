# 이진 탐색 + 극댓값 찾기

## 1차원의 경우

극댓값의 정의: b >= a 이고 b >= c 이면 2번 위치가 극댓값이다.
i >= h 이면 9번 위치가 극댓값이다.
|위치|1|2|3|4|5|6|7|8|9|
|-|-|-|-|-|-|-|-|-|-|
|값|a|b|c|d|e|f|g|h|i|

> 문제: **극댓값이 존재할 경우** 그 값을 찾아라.(항상 존재하는가?)

> 답: 크거나 **같다**의 경우에 극댓값은 **항상** 존재한다.

## 알고리즘

### 코드 구현

#### 1. 반복문

```js
function binarySearch(array, target) {
  let low = 0;
  let high = array.length - 1;
  while (low <= high) {
    let mid = (low + high) / 2;
    if (target === array[mid]) return mid;
    else if (target < array[mid]) high = mid - 1;
    else low = mid + 1;
  }
  return -1;
}
```

#### 2. 재귀 (분할 정복)

```js
function binarySearch(array, target, low, high) {
  if (low > high) return -1;
  else {
    let mid = (low + high) / 2;
    if (target === array[mid]) return mid;
    else if (target < array[mid])
      return binarySearch(array, target, low, mid - 1);
    else return binarySearch(array, target, mid + 1, high);
  }
}
```

## 2차원의 경우
