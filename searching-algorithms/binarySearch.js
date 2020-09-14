function binarySearch(arr, val) {
  let right = 0;
  let left = arr.length - 1;
  let middle = Math.ceil(left + right / 2);

  //reset the middle and the head/tail depending on the values position in the array, upon each iteration
  while (right < left) {
    if (val === arr[middle]) {
      return middle;
    } else if (val < arr[middle]) {
      left = middle - 1;
      middle = Math.ceil(left + right / 2);
    } else if (val > arr[middle]) {
      right = middle + 1;
      middle = Math.ceil(left + right / 2);
    }
  }

  return -1;
}

console.log(binarySearch([1, 2, 3, 4, 5, 7, 8, 9], 8));
