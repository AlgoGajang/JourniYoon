class Throttler {
  constructor(maxConcurrency) {
    this.maxConcurrency = maxConcurrency;
  }

  async run(asyncFunction) {
    // 여기에 풀이를 작성하시면 됩니다.
    return await asyncFunction();
  }
}

//해당 부분을 수정하시면, 채점이 어려울 수 있습니다.
const solution = Throttler;
