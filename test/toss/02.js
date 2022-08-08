function solution(html) {
  var answer = true;
  const regex = /(<+[^>]*?>)/g;
  const tag = html.match(regex);

  [
    <div>
      ,<button>,</button>,
    </div>,
  ];
  for (let i = 0; i < tag.length / 2; i++) {
    if (tag[i].substring(1) !== tag[tag.length - 1 - i].substring(2))
      return !answer;
    continue;
  }
  return answer;
}
