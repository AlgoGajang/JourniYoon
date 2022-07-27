function solution(answers) {
	let answer = [];
	// 각각의 수포자들이 문제 찍는 방식을 배열로 넣어둔다.
	const first = [1, 2, 3, 4, 5];
	const second = [2, 1, 2, 3, 2, 4, 2, 5];
	const third = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
	// 수포자들이 정답 맞힌 개수를 배열에 저장한다.
	let answerCount = [0, 0, 0];
	// 정답 배열을 돌며 각 수포자들이 맞힌 개수를 카운트 하는 반복문이다.
	// 각각 문제 찍는 번호의 배열을 순회하도록 나머지를 활용한다.
	for (let i = 0; i < answers.length; i++) {
		if (answers[i] === first[i % 5]) answerCount[0]++;
		if (answers[i] === second[i % 8]) answerCount[1]++;
		if (answers[i] === third[i % 10]) answerCount[2]++;
	}
	// 정답을 가장 많이 맞힌 개수를 찾는다.
	const max = Math.max(...answerCount);
	// 수포자들의 정답 개수 배열을 돌며 높은 점수를 받은 사람을 찾는다.
	for (let i = 0; i < 3; i++) {
		if (max === answerCount[i]) answer.push(i + 1);
	}
	return answer;
}
