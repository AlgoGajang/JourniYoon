# :memo: 조합이란?

서로 다른 n개 중 r개를 선택하는 **(순서를 고려하지 않는)** 경우의 수를 의미한다.<br>
[조합 정의](https://terms.naver.com/entry.naver?docId=945548&cid=47324&categoryId=47324)

# :sparkles: 조합 알고리즘 구현 (JavaScript)

## 구현

- 재귀 종료 조건: 하나를 선택할 때에는, 모든 배열의 원소를 선택해서 리턴한다.
- forEach 문으로, 배열의 모든 원소를 처음부터 끝까지 한 번씩 고정(fixed) 되도록 한다.
- 고정(fixed)된 값의 나머지 배열에 대해서 조합을 구하도록 한다. 이 때, 선택하는 개수를 하나 줄인다.
- 조합을 만들어온 결과에 fixed 고정된 값을 앞에 붙여서 리턴할 배열에 spread syntax 로 배열화 한 후에 리턴한다.
- 2C3, 1C2 같이 선택하려는 개수가 많으면 빈 배열이 return 되기 때문에 위의 예에서 3과 4를 선택할 때에는 빈 배열이 돌와아서 최종 결과값에 포함되지 않는다

```javascript
function Combinations(array, k) {
	let results = [];
	if (k === 1) return array.map((value) => [value]); // 1개 선택 시, 각각의 값을 배열에 담아 반환
	array.map((fixed, index, origin) => {
		const rest = origin.slice(index + 1); // 고정값(fixed)을 제외한 나머지 값의 배열
		const combinations = Combinations(rest, k - 1); // 나머지 값(rest)의 조합을 구한다.
		const attached = combinations.map((combination) => [fixed, ...combination]); // 나머지에 대한 조합과 고정값(fixed)을 합쳐 만든다.
		results.push(...attached);
	});
	return results;
}
```

# :memo: 중복 조합이란?

중복 가능한 n개 중 r개를 골라 선택하는 **(순서를 고려하지 않는)** 경우의 수를 의미한다.

# :sparkles: 중복 조합 알고리즘 구현 (JavaScript)

## 출처

[순열, 조합 공식 정리](https://coding-factory.tistory.com/606)<br>
[순열, 조합 알고리즘 개념과 예제(구현)](https://coding-factory.tistory.com/606)<br>
[JavaScript로 순열과 조합 알고리즘 구현하기](https://jun-choi-4928.medium.com/javascript%EB%A1%9C-%EC%88%9C%EC%97%B4%EA%B3%BC-%EC%A1%B0%ED%95%A9-%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98-%EA%B5%AC%ED%98%84%ED%95%98%EA%B8%B0-21df4b536349)<br>
