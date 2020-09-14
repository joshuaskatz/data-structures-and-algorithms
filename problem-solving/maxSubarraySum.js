//Write a function called maxSubarraySum, which finds the maximum sum of a subarray with the length of the number passed to the function.

function maxSubarraySum(arr, val) {
  if (arr.length < val) return false;

  let sum = 0;
  let tempSum = 0;

  for (let i = 0; i < val; i++) {
    sum += arr[i];
  }

  tempsum = sum;

  for (let i = val; i < arr.length; i++) {
    tempSum = tempSum - arr[i - val] + arr[i];
    sum = Math.max(sum, tempSum);
  }

  return sum;
}

console.log(maxSubarraySum([100, 200, 300, 400], 3));
