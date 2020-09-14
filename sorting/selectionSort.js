//Swapping function
const swap = (arr, i1, i2) => {
  [arr[i1], arr[i2]] = [arr[i2], arr[i1]];
};

//Store the first element in the min value
//Compare this item to the next item until you find a new min. Make that the new min (idx, not the value itself).
//If the min is not the value(idx) you initially began with, swap the two values.
//Repeat this with the next element until the array is sorted. The first element will be sorted already.

const selectionSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    //min will always be i, because the sorted values are at the beginning after each pass.
    let min = i;
    //j is i+1, because we always begin with comparing the value proceeding i.
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        //if a new min is found, update variable min.
        min = j;
      }
    }
    //because we save min as j, we perform the swap in the outer loop.
    //if min didn't change, swap won't occur. Only swap if min changed!
    if (i !== min) {
      [arr[i], arr[min]] = [arr[min], arr[i]];
    }
  }
  return arr;
};
console.log(selectionSort([2, 3, 1, 4, 5]));
