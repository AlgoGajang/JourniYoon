function solution(n, computers) {
  let visited = new Array(n).fill(0);
  let answer = 0;

  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      DFS(i);
      answer++;
    }
  }

  function DFS(vertex) {
    visited[vertex] = 1; // 방문처리
    for (let i = 0; i < n; i++) {
      if (computers[vertex][i] && !visited[i]) {
        // 컴퓨터와 연결되어 있고(value === 1) 방문하지 않았다면
        DFS(i);
      }
    }
  }
  return answer;
}
