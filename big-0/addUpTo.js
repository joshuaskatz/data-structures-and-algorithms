const { performance } = require("perf_hooks");

//calculate the sum of all numbers from 1 up to (and including) n.

//First solution:
const addUpTo = (n) => {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }

  return total;
};

//how long does the code take to execute?
const t1 = performance.now();
addUpTo(10000000000);
const t2 = performance.now();

console.log(`Time elapsed: ${(t2 - t1) / 1000} seconds`);

console.log("--");

//Second solution:
const addUpTo2 = (n) => {
  return (n * (n + 1)) / 2;
};

const t3 = performance.now();
addUpTo2(10000000000);
const t4 = performance.now();

console.log(`Time elapsed: ${(t4 - t3) / 1000} seconds`);
