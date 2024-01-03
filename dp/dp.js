
const cache = {};
const dp = (x) => {
  // 점화식, 최소단위 + 메모이제이션
  const candidates = [];
  if (x === 1) {
    return 0;
  }
  // 최소 단위
  if (cache[x]) { 
    return cache[x];
  }
  //반복 방지 (재귀)

  if (x % 5 === 0) { 
    candidates.push(dp(x / 5));
  }
  if (x % 2 === 0) { 
    candidates.push(dp(x / 2));
  }
  if (x % 3 === 0) { 
    candidates.push(dp(x / 3));
  }
  // 큰 수를 작은 수로 나누는 과정 (점화식)
  if (x > 1) {
    candidates.push(dp(x - 1));
  }
  
  cache[x] = Math.min(...candidates) + 1;
  return Math.min(...candidates) + 1;
}

console.log(dp(1000))

const antCache = {};
const antArr = [1,3,6,5];

const ant = (n) => {
  // 마지막 추가 O, X
  // 추가 시 ant(n-2) + n
  // 최소 조건 n=0 (첫번째)
  // 함수 콜스택 문제 : 재귀 사용 시 (탑다운)
  // 바텀업 방법도 고려하기 (교재)
  if (n === 0) {
    return antArr[n];
  }
  if (n === 1) {
    return Math.max(antArr[0], antArr[1]);
  }

  if(antCache[n]) {
    return antCache[n];
  }
  antCache[n] = Math.max(ant(n-2) + antArr[n], ant(n-1));
  return antCache[n];
}

console.log(ant(3))
