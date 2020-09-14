//Write a function called productOfArray whcih takes in an array of numbers and returns the product of them all.

//Utilize helper recursion
function main(arr) {
  //initialize value
  let value = 1;
  function productOfArray(arr) {
    //Base case: if arr is empty return
    if (arr.length === 0) return;

    //Value is equal to the first value of the array times itself.
    value *= arr[0];
    //Remove that idx and pass in the new array.
    productOfArray(arr.slice(1));
  }

  productOfArray(arr);
  return value;
}

console.log(main([1, 2, 3, 10]));

//Without a helper function.
function productOfArray(array) {
  //Base case: if array is empty return
  if (!array.length) return 1;

  //Value is equal to the first value of the array times itself.
  return array[0] * productOfArray(array.slice(1));
}

console.log(productOfArray([1, 2, 3]));
