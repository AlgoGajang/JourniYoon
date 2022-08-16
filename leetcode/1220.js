/**
 * @param {number} n
 * @return {number}
 */
var countVowelPermutation = function (n) {
  let answer = 0;
  let permutator = {
    a: ["e"],
    e: ["a", "i"],
    i: ["a", "e", "o", "u"],
    o: ["i", "u"],
    u: ["a"],
  };
  const permutation = () => {};
  return answer;
};

/* 
let permutator = {
  a: ["e"],
  e: ["a", "i"],
  i: ["a", "e", "o", "u"],
  o: ["i", "u"],
  u: ["a"],
};
 */
var maxDepth = function(s) { const regex = /[\(\)]/g; const vps = s.match(regex) if(vps === null || vps.length === 0) return 0; let countArr = [] let count = 0 for(let i=0; i<vps.length; i++) { // 열린 경우 if(vps[i] === "(") { count++} //닫힌 경우 else { count-- } countArr.push(count) } return Math.max(...countArr) }; 