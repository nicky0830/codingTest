
const N = [8,3,7,9,2]
const M = [5,7,9,2,1]
const answer = [];
const check = () => {
  N.sort((a,b) => a-b);
  console.log(N);
  let start = 0;
  let end = N.length-1;
  for (let m of M) {
    bs(start, end, m);
  }
  return answer;
}

const bs = (start, end, m) => {
  let mid = Math.floor((start + end)/2);
  if(N[mid] === m) {
    answer.push('yes');
    return;
  }
  if (start >= end) {
    answer.push('no');
    return;
  }
  if (m < N[mid]) {
    end = mid-1;
  }
  if (m > N[mid]) {
    start = mid +1;
  }
  bs(start, end, m);
}

console.log(check());
