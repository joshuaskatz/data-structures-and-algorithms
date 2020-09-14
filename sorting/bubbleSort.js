//Swapping function, swaps two idx's of an array.
const swap = (arr, idx1, idx2) => {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
};

//Start looping with a variable called i at the end of the array towards the beginning.
//Start an inner loop with a variable called j from the beginning until i-1.
// If arr[j] > arr[j+1], swap the two values.

const bubbleSort = (arr) => {
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };
  //Variable will allow us to tell if there were no swaps on the previous pass, if so we break out of the loop!
  let noSwaps;
  //Going from end of array to beginning. This way we can use i in the definition for the loop of j.
  for (let i = arr.length; i > 0; i--) {
    noSwaps = true;
    //We always know after each pass, the number at the end is sorted, hence i-1. For each pass, i decreases, so the second pass, there should be 2 sorted values at the end. The third pass will have 3 sorted values at the end, and so on.
    for (let j = 0; j < i - 1; j++) {
      //If the first idx is greater than the one proceeding it, swap them.
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
        //If this conditional isn't met, noSwaps remains true and the loop breaks, ending it.
        noSwaps = false;
      }
    }
    if (noSwaps) break;
  }
  return arr;
};

console.log(bubbleSort([1, 5, 3, 2, 87, 35, 12, 756576, 2123, 55, 34]));

const bubbleSort = (arr) => {
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };
  let noSwaps;
  for (let i = arr.length; i > 0; i--) {
    noSwaps = true;
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
        noSwaps = false;
      }
    }
    if (noSwaps) break;
  }
  return arr;
};
