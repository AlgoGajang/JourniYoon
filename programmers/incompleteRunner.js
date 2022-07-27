function solution(participant, completion) {
  let answer = "";
  let participantObj = {};
  participant.forEach((runner) => {
    participantObj[runner] > 0
      ? participantObj[runner]++
      : (participantObj[runner] = 1);
  });

  completion.forEach((completer) => {
    participantObj[completer]--;
  });
  console.log(participantObj);
  for (const incomplete in participantObj) {
    if (participantObj[incomplete] > 0) {
      answer = incomplete;
    }
  }
  return answer;
}
