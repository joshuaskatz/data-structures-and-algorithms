//Built in .sort() method

//Sort numbers by value
const sortNumbersLowToHigh = (num1, num2) => {
  //If return value is negative, num1 comes first, if positive num2 is first.
  return num1 - num2;
};

const sortNumbersHighToHigh = (num1, num2) => {
  return num2 - num1;
};

const numArr = [1, 5, 3, 7, 22, 6];

console.log(numArr.sort(sortNumbersLowToHigh));
console.log(numArr.sort(sortNumbersHighToHigh));

//Can accomplish the same thing with ordering by string length.
const sortStringByLength = (str1, str2) => {
  //reverse the return value for largest to smallest
  return str1.length - str2.length;
};

const strArr = ["joshua", "katz", "is", "an", "incel"];

console.log(strArr.sort(sortStringByLength));
