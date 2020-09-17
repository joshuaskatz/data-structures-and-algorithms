//The fibonacci sequence w/o dynamic programming
//As 'n' grows for this function, the performance quickly and drastically suffers:
//  The big O of this is approximately O(2^n), exponential time complexity.
function fib(n) {
  if (n <= 2) return 1;
  return fib(n - 1) + fib(n - 2);
}

//As 'n' grows, we will see an increase in overlapping subproblems within our recursive funtion.
//There is no point in calculating/calling these exact functions that have already run. This unnecessarily increases time complexity.

//We will implement memoization, and create a structure to store the results of the subproblems in.
//Searching the memo is constant time, because we have the index we are looking for. The big O for this function is approximately O(n).
function fibMemo(n, memo = []) {
  if (memo[n] !== undefined) return memo[n];
  if (n <= 2) return 1;
  let res = fibMemo(n - 1, memo) + fibMemo(n - 2, memo);
  memo[n] = res;
  return res;
}

//Using tabulation, we can achieve a much better space complexity.
//Start at the smallest subproblem and work our way up using iteration.
//Store the results in a "table" (we can use an array)
function fibTab(n) {
  if (n <= 2) return 1;
  //If we pass fib(1) and fib(2)
  let fibNums = [0, 1, 1];
  //loop over n where i <= n starting at i = 3, because the first three values are already in fibNums
  for (let i = 3; i <= n; i++) {
    //fibNums at index i is the the sum of the previous two numbers
    fibNums[i] = fibNums[i - 1] + fibNums[i - 2];
  }
  //Return the final index of the array
  return fibNums[n];
}
