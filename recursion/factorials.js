function factorials(n) {
  //base case is n===1, return 1
  //0! is always 1
  if (n === 1 || n === 0) return 1;
  return n * factorials(n - 1);
}

console.log(factorials(5));
