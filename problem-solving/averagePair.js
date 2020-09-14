//Write a function called averagePair. Given a sorted array of integers and a target average, determine if there is a pair of values in the array where the average of the pair equals the target average.

const averagePair = (arr, avg) => {
  if (arr.length < 1) return false;

  let i = arr[0];
  let j = arr[arr.length - 1];

  while (i < j) {
    if ((i + j) / 2 === avg) {
      return true;
    } else if ((i + j) / 2 < avg) {
      i++;
    } else {
      j--;
    }
  }
  return false;
};

console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8));
