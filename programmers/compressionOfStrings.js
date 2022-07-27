function solution(s) {
	// 현재 문자열 길이로 시작한다.
	let answer = [s.length];
	// 최대 문자열 압축 길이를 maxLen 변수로 설정한다.
	const maxLen = Math.floor(s.length / 2);

	for (let i = 1; i <= maxLen; i++) {
		let sub_s = "";
		let cnt = 1;
		// i만큼 자른 문자를 비교한다.
		for (let j = 0; j < s.length; j += i) {
			const head = s.substring(j, j + i);
			const tail = s.substring(j + i, j + i * 2);
			// 자른 문자열이 같다면 카운트 숫자를 증가시킨다.
			if (head === tail) {
				cnt++;
				// 문자열이 같지 않다면 카운트 숫자가 1인 경우와 아닌 경우로 나누어 처리한다.
			} else {
				// 압축된 문자가 없으므로 현재 비교 중인 문자열을 기존 압축 문자열에 추가한다.
				if (cnt === 1) {
					sub_s = sub_s + head;
				} else {
					// 압축이 끝났으므로 압축 문자열에 카운트 숫자를 추가하고, 다시 카운트를 초기화한다.
					sub_s = sub_s + cnt + head;
					cnt = 1;
				}
			}
		}
		// i에 해당하는 만큼 문자열 압축이 끝나면 answer 배열에 압축한 문자열의 길이를 추가한다.
		answer.push(sub_s.length);
	}
	// answer 배열에 담긴 최소 길이를 반환한다.
	return Math.min(...answer);
}

// Reference Code
// 실행 속도 매우 빠름
function solution(s) {
	let minLen = s.length; //현재 스트링 길이로 시작한다.

	// 압축하는 문자열 길이를 1개씩부터, s의 반 까지 시도한다.
	top: for (let n = 1; n <= s.length / 2; n++) {
		// 이번 트라이얼의 문자열 길이 초기화한다.
		let curLen = 0;
		for (let i = 0; i < s.length; i += n) {
			// 이번 트라이얼의 길이 n 만큼 테스트를하고, 일치하는 수만큼 카운터로 계산
			// 불일치 시에 다음으로 진행
			let counter = 1;
			while (s.slice(i, i + n) === s.slice(i + n, i + 2 * n)) {
				i += n;
				counter++;
			}
			// 만약 하나도 일치가 없었으면, 테스트했던 문자열의 길이만큼만 더해주고,
			// 일치한 문자열이 하나라도 존재했다면 카운터를 스트링으로 변환 후 길이를 더해줌.
			if (counter !== 1) {
				curLen += n + (counter + "").length;
			} else {
				// 1일경우 그냥 n을 더해주는데, 혹시 맨 마지막에 남은 문자열이 n이하일 경우
				// 남는 수만 더해준다.
				curLen += s.length < i + n ? s.slice(i, i + n).length : n;
			}
			// 현재까지의 최소길이보다 현재길이가 커지는 순간, 다음 트라이얼 시작.
			if (minLen <= curLen) continue top;
		}
		// 여기까지 살아남았으면 이번 길이가 최소길이다.
		minLen = curLen;
	}
	return minLen;
}
