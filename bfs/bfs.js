const given = [1,2,3,4,5];
const answer = [];
// 본인, 이전에 있던거에 본인 다 넣기

const permutation = (n, visited, ) => {
  if (visited.length === n ) {
    // 빠져나오는 조건
    // console.log(visited);
    return;
  }
  for (let i=1; i<= n; i++) {
    if (!visited.includes(i)) {
      visited.push(i);
      permutation(n, visited);
      visited.pop();
    }
  }
}

permutation(5, []);


const question = [
  [0,0,1,1,0],
  [0,0,0,1,1],
  [1,0,1,1,1],
  [0,0,0,0,0]
]
let value = 0;
const iceCream = () => {
  for (let i=0; i<question.length; i++) {
    for (let j=0; j<question[0].length; j++) { 
      if (question[i][j] === 0) {
        bfs(i, j);
        value +=1;
      }
    }
  }
  return value;
}

const bfs = (row, col) => {
  const queue = [];
  question[row][col] = 1;
  queue.push([row, col]);
  let startIndex = 0;
  while (queue.length > 0) {
    // const start = queue.shift();
    const start = queue[startIndex++];
    const [row, col] = start;
    for (const direction of [[-1, 0], [1, 0], [0, 1], [0, -1]]) {
      const nextRow = row + direction[0];
      const nextCol = col + direction[1];
      if (nextRow >= 0 && nextRow < question.length && nextCol >= 0 && nextCol < question[0].length && question[nextRow][nextCol] === 0) {
        question[nextRow][nextCol] = 1;
        queue.push([nextRow, nextCol])
      }
    }
    // if (row < question.length -1 && question[row+1][col] === 0) {
    //   question[row+1][col] = 1;
    //   // 중복 피하기 위해 push 전 1로 변경
    //   queue.push([row+1, col])
    // }
    // if (col < question[0].length -1 && question[row][col+1] === 0) { 
    //   question[row][col+1] = 1;
    //   queue.push([row, col+1])
    // }
    // if (row > 0 && question[row-1][col] === 0) {
    //   question[row-1][col] = 1;
    //   queue.push([row-1, col])
    // }
    // if (col > 0 && question[row][col-1] === 0) {
    //   question[row][col-1] = 1;
    //   queue.push([row, col-1])
    // }
  }
}
console.log(iceCream());



