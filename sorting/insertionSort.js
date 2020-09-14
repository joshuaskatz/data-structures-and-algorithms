//Start by picking the second element in the array
//Now compare the second element with the one vefore it and swap if necessary
//Continue to the next element and if it is in the incorrect order, iterate through the sorted portion(ie the left side) to place the element in the correct place.
//Repeat until the array is sorted.

//Must use var in loops. If we used let we could not access j outside of its respective loop due to block scoping.
const insertionSort = (arr) => {
  for (var i = 1; i < arr.length; i++) {
    let curr = arr[i];
    //if arr[j] < curr, exit the loop
    for (var j = i - 1; j >= 0 && arr[j] > curr; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = curr;
  }
  return arr;
};

console.log(insertionSort([1, 52, 4, 8, 43]));

const insertionSort = (arr) => {
  for (var i = 1; i < arr.length; i++) {
    let curr = arr[i];
    for (var j = i - 1; j >= 0 && arr[j] > curr; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = curr;
  }
  return arr;
};
