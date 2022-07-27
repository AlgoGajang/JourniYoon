## 문제 파악

1. 중복 신고는 하나로 카운트 되기 위해 report의 중복값을 제거
2. 유저 아이디 별로 신고 당한 횟수 체크
   'key'에 user ID, 'value'에 [신고당한 횟수, 유저가 신고한 ID] 기록
3. value가 k와 같거나 큰 값을 찾아 해당 'key'값을 정지된 ID 배열에 저장
4. 저장된 배열의 유저 ID를 신고한
5. 신고ID-정지ID 대조 => 메일 발송 횟수 체크

## 해결 방안

1. 중복값은 Set 객체를 활용해 유일한 값만 저장
2. 신고횟수, 신고한 ID, 정지된 ID를 각각 key-value형태로 체크
3. {badUser: Array(reportUser1, reportUser2...)}로 보기 예시와 반대로 생각(정지당한 ID 배열을 별도 저장할 필요가 사라짐)

## 어려웠던 부분

- 시간 초과
- `신고 횟수 + 신고한 ID + 정지된 ID` 신경써야하는 세부사항이 세 가지나 되었고,
  여기서 중복 계산되는 코드를 최대한 줄여야 시간 초과를 해결할 수 있다.
- {피신고ID: [신고자1, 신고자2...]} 뒤집어서 생각하기 어려웠다.

## 보충할 부분

- 객체와 Map 차이 알아두기
- for ...in 정확한 사용법

## Reference Code

```js
function solution(id_list, report, k) {
  let reports = [...new Set(report)].map((a) => {
    return a.split(" ");
  });
  let counts = new Map();
  for (const bad of reports) {
    counts.set(bad[1], counts.get(bad[1]) + 1 || 1);
  }
  let good = new Map();
  for (const report of reports) {
    if (counts.get(report[1]) >= k) {
      good.set(report[0], good.get(report[0]) + 1 || 1);
    }
  }
  let answer = id_list.map((a) => good.get(a) || 0);
  return answer;
}
```
