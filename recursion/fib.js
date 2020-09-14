//Write a recursive function called fib which accepts a number and returns the nth number in the fibonacci sequence. Recall that the Fibonacci sequence is the sequence of whole numbers 1,1,2,3,4,8,... which starts and ends with 1 and 1, and where every number thereafter is equal to the sum of the previous two numbers.

function fib(n) {
  //base case, first two values of fib sequence are 1.
  if (n <= 2) return 1;

  return fib(n - 1) + fib(n - 2);
}

console.log(fib(10));
