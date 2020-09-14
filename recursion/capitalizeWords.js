//Write a recursive function called capitalizeWords. Given an array of words, return a new array containing each word capitalized.

function capitalizeWords(arr) {
  let newArray = [];
  function helper(arr) {
    if (!arr.length) return [];

    let string = arr[0].toUpperCase();
    newArray.push(string);

    helper(arr.slice(1));
  }

  helper(arr);

  return newArray;
}
