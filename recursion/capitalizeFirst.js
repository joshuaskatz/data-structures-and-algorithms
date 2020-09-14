//Write a recursive function called capitalizeFirst. Given an array of strings, capitalize the first letter of each string in the array.

function capitalizeFirst(arr) {
  let newArr = [];

  function helper(arr) {
    if (!arr.length) return [];

    //Pop off first letter of string, uppercase it and then concat after removing the first letter of that same string. Now uppercase.
    let letter = arr[0][0].toUpperCase();
    let string = letter.concat(arr[0].slice(1));
    newArr.push(string);
    //Recurse with the array minus the first idx.
    helper(arr.slice(1));
  }

  helper(arr);

  return newArr;
}

console.log(capitalizeFirst(["car", "taco", "banana"]));
