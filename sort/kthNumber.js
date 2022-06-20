function solution(array, commands) {
	let answer = [];
	for (let i = 0; i < commands.length; i++) {
		let start = commands[i][0] - 1;
		let end = commands[i][1];
		let target = commands[i][2] - 1;
		let temp = array.slice(start, end);
		let sorted = temp.sort((a, b) => a - b);
		answer.push(sorted[target]);
	}
	return answer;
}

/*
1. i부터 j번째 숫자까지 자른 배열을 만든다.
2. 1에서 만든 배열을 오름차순으로 정렬한다.
3. 2에서 만든 배열의 k번째 숫자를 찾아 answer배열에 넣는다.
*/
