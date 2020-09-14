//Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.

function sameFrequency(n1, n2) {
  let num1 = n1.toString();
  let num2 = n2.toString();

  if (num1.length !== num2.length) return false;

  let lookup = {};

  for (let i of num1) {
    lookup[i] ? lookup[i]++ : (lookup[i] = 1);
  }

  for (let i of num2) {
    if (!lookup[i]) {
      return false;
    } else {
      lookup[i]--;
    }
  }

  return true;
}

console.log(sameFrequency(124345, 443215));
