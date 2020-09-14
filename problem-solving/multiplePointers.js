//Write a function called sumZero which accepts a sorted array of integers. The function should find the first pair where the sum is 0. Return an array that includes both values that sum to zero or undefined if a pair does not exist.

function sumZero(arr) {
  //left pointer is idx 0
  let left = 0;
  //right pointer is last idx
  let right = arr.length - 1;

  //as long as the left pointer idx is smaller than the right.
  while (left < right) {
    //sum is the arr els added at respective idxs
    let sum = arr[left] + arr[right];
    if (sum === 0) {
      //success
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      //if the sum is positive we know the right idx pointer value is too high
      right--;
    } else if (sum < 0) {
      //if the sum is negative we know the left idx pointer value is too low
      left++;
    }
  }
}

// console.log(sumZero([-9, -4, -3, -1, 0, 1, 2, 5]));

//Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array. There can be negative numbers in the array, but it will always be sorted.

function countUniqueValues(arr) {
  //if empty array return 0
  if (arr.length === 0) return 0;

  //start first pointer at first idx and second pointer at second idx
  let first = 0;
  let second = 1;
  //while second is less than the total length of the array
  while (second < arr.length) {
    //element at first pointer idx === element at sexond pointer idx move the second pointer up one
    if (arr[first] === arr[second]) {
      second++;
      //if the element as the first pointer idx is smaller than the element at the second pointer idx, increase move the first pointer up one idx and set the element equal to the value of the element at the second pointer idx. Move second pointer up one idx.
    } else if (arr[first] < arr[second]) {
      first++;
      arr[first] = arr[second];
      second++;
    }
  }
  //once the second pointer idx reaches the last idx of the array return the value of first + 1 (b/c it started at zero), to return the number of distinct values.
  return first + 1;
}

// console.log(countUniqueValues([-2, -1, -1, 0, 1]));

//Another way more concise way.
function countUniqueValues2(arr) {
  let i = 0;
  //j increments automatically b/c of the for loop.
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
}

console.log(countUniqueValues2([-2, -1, -1, 0, 1]));
