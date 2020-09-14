//Return the idx of the arr where val is found. If val doesnt exist in arr, return -1.
function linearSearch(arr, val) {
  //j keeps track of the idx, so we start at 0.
  let j = 0;
  for (let i of arr) {
    if (i === val) {
      //if val and arr[i] match return j, the index it was found at.
      return j;
    }
    //increase j with each iteration
    j++;
  }

  return -1;
}

//Or with a traditional for loop
function linearSearch(arr, val) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) return i;
  }
  return -1;
}
