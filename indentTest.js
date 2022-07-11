function solution(progresses, speeds) {
	let group = [];
	for (let i = 0; i < progresses.length; i++) {
		const speed = speeds[i];
		const deadline = Math.ceil((100 - progresses[i]) / speed); // 작업일 수
		const deploy = group[group.length - 1]; // 배포 묶음 비교군
		// 이전 기능 개발의 작업일 수와 현재 기능 개발의 작업일 수를 비교한다.
		if (deploy && deploy[0] >= deadline) {
			deploy.push(deadline);
		} else {
			group.push([deadline]);
		}
	}
	// 배포 묶음의 길이를 반환한다. test
	return group.map((result) => result.length);
}
