//Write a recursive function called flatten which accepts an array of arrays and returns a new array with all values flattened.

//Insert top level idx into a new array.
//Pass subarray back into flatten to repeat.

function flatten(arr) {
  if (!arr.length) return [];

  let result = [];
  if (arr[0].length) {
    result = flatten(arr[0]);
  } else {
    result.push(arr[0]);
  }

  return result.concat(flatten(arr.slice(1)));
}

console.log(flatten([1, [2, [3, 4], [[5]]]]));
