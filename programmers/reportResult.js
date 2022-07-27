function solution(id_list, report, k) {
  // 중복 신고 제거 및 ["신고자 피신고자"]=> [["신고자","피신고자"]]변환
  let deduplicateReport = [...new Set(report)].map((element) =>
    element.split(" ")
  );
  let reportedCount = {}; // 신고 당한 횟수 {피신고자: Number(count)}
  let reporter = {}; // 신고한 ID {피신고자: Array(신고자1, 신고자2...)}
  let mailCount = {}; // 받을 메일 수 {신고자: Number(count)}

  // setting
  id_list.forEach((element) => {
    reportedCount[element] = 0;
    reporter[element] = [];
    mailCount[element] = 0;
  });
  // 신고한 ID를 객체안의 배열값으로 저장
  deduplicateReport.forEach((element) => {
    reporter[element[1]].push(element[0]); // 피신고자 ID를 key로, 신고자 ID를 value에 저장, element[1]은 피신고자, element[0]은 신고자
    reportedCount[element[1]] += 1; // 신고 당한 횟수 카운트
  });
  // 신고 횟수가 k번 이상인 ID를 찾아서 신고자 ID 받을 메일 횟수 체크
  for (const reportedID in reportedCount) {
    if (reportedCount[reportedID] >= k) {
      reporter[reportedID].forEach((reporter) => {
        mailCount[reporter] += 1;
      });
    }
  }
  return id_list.map((ID) => mailCount[ID]);
}
