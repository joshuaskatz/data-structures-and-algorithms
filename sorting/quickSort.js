//Pivot/partition helper
//This designates an elements in a given array as the pivot.
//It should then rearrange elements in the array so that all values less than the pivot are moved to the left of the pivot, and all the values greater than the pivot are moved to the right of the pivot.
//The order of elements on either side of the pivot doesn't matter.
//This helper should achieve this in place, that is, it should not create a new array.
//When complete, the helper should return the index of the pivot.
const pivot = (arr, start = 0, end = arr.length + 1) => {
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };
  let pivot = arr[start];
  let swapIdx = start;

  for (let i = start + 1; i <= end; i++) {
    if (pivot > arr[i]) {
      swapIdx++;
      swap(arr, swapIdx, i);
    }
  }
  swap(arr, start, swapIdx);
  return swapIdx;
};

//Quick sort
//Call the pivot helper on the array
//When the helper returns to you the updated pivot index, recursively call the pivot helper on the subarray to the left of that index, and the subarray to the right of that index.
//Your base case occurs when you consider a subarray with less than 2 elements.
const quickSort = (arr, left = 0, right = arr.length - 1) => {
  if (left < right) {
    let pivotIdx = pivot(arr, left, right);
    //left-side
    quickSort(arr, left, pivotIdx - 1);
    //right-side
    quickSort(arr, pivotIdx + 1, right);
  }
  return arr;
};
