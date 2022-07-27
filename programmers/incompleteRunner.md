## 문제 파악

1. participant에는 존재하고 completion에는 없는 이름을 찾는다.
2. 단, 동명이인이 존재할 수 있다.

## 해결 방안

1. participant 배열의 값을 각각 객체의 key로 만든다.
2. completion 배열을 순회하며 key에 존재하지 않는 이름을 찾는다.

## 어려웠던 부분

- 동명이인 처리 방식

## Reference Code (문제 의도와는 맞지 않음, 효율성 떨어짐)

```js
const solution = (p, c) => {
  p.sort();
  c.sort();
  while (p.length) {
    let pp = p.pop();
    if (pp !== c.pop()) return pp;
  }
};
```
