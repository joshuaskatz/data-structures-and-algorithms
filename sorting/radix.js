//getDigit(num, place) returns the digit in a number at the given place value
const getDigit = (num, place) => {
  //Divide by 10^place, floor it and get the remainder of mod 10.
  return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
};

//digCount(num) returns the number of digits in num
const digitCount = (num) => {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
};

//mostDigits(nums) given an array of numbers, returns the number of digits of the largest number in the list.
const mostDigits = (nums) => {
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  }

  return maxDigits;
};

//radixSort()
//Define a function that accepts a list of numbers
//Figure out how many digits the largest number has
//Loop from k=0 up to this largest number of digits
//For each iteration of the loop:
//////Create buckets (arrays) for each digit(0 to 9)
//////Place each number in the corresponding bucket based on its kth digit
//Replace our existing array with the values in the buckets, starting with 0 and going up to 9
//Return the list at the end

const radixSort = (arr) => {
  let largest = mostDigits(arr);
  for (let k = 0; k < largest; k++) {
    //Created an array of 10 empty subarrays
    let digitBuckets = Array.from({ length: 10 }, () => []);
    for (let i = 0; i < arr.length; i++) {
      let digit = getDigit(arr[i], k);
      digitBuckets[digit].push(arr[i]);
    }
    arr = [].concat(...digitBuckets);
  }
  return arr;
};

console.log(radixSort([1, 53, 23, 765, 3242, 74552, 214, 43532]));
