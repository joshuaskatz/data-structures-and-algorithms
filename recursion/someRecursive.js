//Write a recursive function called someRecursive which accepts an array and a callback. The function returns true if a single value in the array returns true when passed to the callback. Else, false.

const isOdd = (val) => val % 2 !== 0;

function someRecursive(arr, cb) {
  if (arr.length === 0) return false;

  return cb(arr[0]) || someRecursive(arr.slice(1), cb);
}

console.log(someRecursive([4, 6, 8, 9], isOdd));
