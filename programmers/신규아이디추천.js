function solution(new_id) {
  let answer = new_id
    .toLowerCase() //step 1
    .replace(/[^0-9a-z._-]/g, "") // step 2
    .replace(/\.+/g, ".") //step 3
    .replace(/^\.|\.$/g, "") //step 4
    .replace(/^$/, "a") //step 5
    .slice(0, 15)
    .replace(/\.$/, ""); //step 6
  // step 7
  return answer.length > 2
    ? answer
    : answer.padEnd(3, answer[answer.length - 1]);
}
