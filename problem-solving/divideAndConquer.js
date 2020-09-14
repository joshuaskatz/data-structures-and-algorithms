//Given a sorted array of integers, write a function called search, that accepts a value and returns the index where the value passed to the function is located. If the value is not found return -1.

//Use binary search, which implements O(log(n))
function search(array, val) {
  //starting on either end of the array
  let min = 0;
  let max = array.length - 1;

  while (min <= max) {
    //find the middle of the array
    let middle = Math.floor((min + max) / 2);

    //if the value is greater than the value in the middle of the array, min is 1 value above current middle.
    if (array[middle] < val) {
      min = middle + 1;
      //if the value is less than the value in the middle of the array, max is 1 value below current middle.
    } else if (array[middle] > val) {
      max = middle - 1;
    } else {
      //return the value you were searching for
      return middle;
    }
  }
  //not found
  return -1;
}

console.log(
  search([1, 2, 3, 4, 5, 66, 74, 82, 88, 99, 100, 101, 122, 162], 33)
);
