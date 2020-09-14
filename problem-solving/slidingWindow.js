//Write a function called maxSubarraySum wich accepts an array of integers and a number called n. The function should calculate the maximum sum of n consecutive elements in the array.

function maxSubarraySum(arr, n) {
  if (n > arr.length) return null;

  let maxSum = 0;
  let tempSum = 0;
  //sum together the first 'n' numbers in maxSum
  for (let i = 0; i < n; i++) {
    maxSum += arr[i];
  }
  //tempSum === maxSum
  tempSum = maxSum;
  //Subtract first number from the sum and add the very next number, until you reach the end. Whenever the sum is greater than the previous, tempSum is used to update maxSum.
  for (let i = n; i < arr.length; i++) {
    tempSum = tempSum - arr[i - n] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}

console.log(maxSubarraySum([1, 4, 2, 4, 2, 2, 4, 5, 3, 2, 1, 4, 3], 3));
