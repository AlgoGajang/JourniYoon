function solution(board, moves) {
	let answer = 0;
	let basket = [];
	for (let i = 0; i < moves.length; i++) {
		const move = moves[i] - 1; // 크레인 위치를 변수에 저장하여 인덱스로 활용한다.
		for (let j = 0; j < board.length; j++) {
			const claw = board[j][move]; // 뽑힌 인형 숫자를 변수로 저장하여 활용한다.
			// 빈 칸이면 아무 일도 일어나지 않는다.
			if (claw === 0);
			else {
				if (basket[basket.length - 1] !== claw) {
					basket.push(claw);
					board[j][move] = 0; // 인형이 뽑힌 자리는 0으로 변경한다.
				} else {
					board[j][move] = 0; // 인형이 뽑힌 자리는 0으로 변경한다.
					basket.pop(); // 연속한 인형은 터뜨려준다.(사실상 마지막 인형만 제거)
					answer += 2;
				}
				break;
			}
		}
	}
	return answer;
}

/**발상
 * move를 통해 확인하는 것은 각 배열 안에서의 인덱스이다.
 * 인형은 위에서 집어지기 때문에 1=>2=>3=>4=>5 배열 순으로 확인해야한다.
 * 이때 5번 배열이 0이 되면 인형이 없으므로 아무 일도 일어나지 않는다.
 * 바구니로 옮겨진 인형은 2개 이상이면 무조건 같은 숫자가 연달아 있는지 확인한다.
 * 같은 숫자가 연달아 있는 경우 두 개 모두 제거 한다.
 * (바구니에 넣은 후 숫자를 비교하려고 했으나 넣기 전 마지막 숫자와 비교하는게 더 간편하고 시간 복잡도도 낮을 것 같다.)
 * 제거 한 경우 카운트를 올린다.
 */

/**트러블슈팅
 * 빈 칸이면 아무 일도 일어나지 않는다.=> return 으로 작성해 그 즉시 for문이 종료됐다. => 삭제로 해결
 * 원하는 조건을 만족하면 for 반복문을 그만 돌고싶다. => break
 */
