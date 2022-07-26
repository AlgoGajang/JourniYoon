# :memo: 순열이란?

서로 다른 n개 중 r개를 골라 **순서를 고려해** 나열한 경우의 수를 의미한다.<br>
[순열 정의](https://terms.naver.com/entry.naver?docId=945545&cid=47324&categoryId=47324)

# :sparkles: 순열 알고리즘 구현 (JavaScript)

```javascript
const permutator = (inputArr) => {
  let result = [];

  const permute = (arr, m = []) => {
    if (arr.length === 0) {
      result.push(m);
    } else {
      for (let i = 0; i < arr.length; i++) {
        let curr = arr.slice();
        let next = curr.splice(i, 1);
        permute(curr.slice(), m.concat(next));
      }
    }
  };

  permute(inputArr);

  return result;
};
```

# :memo: 중복 순열이란?

중복 가능한 n개 중 r개를 골라 **순서를 고려해** 나열한 경우의 수를 의미한다.

# :sparkles: 중복 순열 알고리즘 구현 (JavaScript)

```javascript

```

## 출처

[순열, 조합 공식 정리](https://coding-factory.tistory.com/606)<br>
[순열, 조합 알고리즘 개념과 예제(구현)](https://coding-factory.tistory.com/606)<br>
[JavaScript로 순열과 조합 알고리즘 구현하기](https://jun-choi-4928.medium.com/javascript%EB%A1%9C-%EC%88%9C%EC%97%B4%EA%B3%BC-%EC%A1%B0%ED%95%A9-%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98-%EA%B5%AC%ED%98%84%ED%95%98%EA%B8%B0-21df4b536349)<br>
