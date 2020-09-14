//Write a function called "same", which accepts two arrays.
//The function should return true if ever value in the array has it's corresponding value squared in the second array. The frequency of values must be the same.

function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};

  //how many times each value is in either array
  for (let val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }

  for (let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }

  for (let key in frequencyCounter1) {
    //for each key in fC1 if the key^2 is not a key in fC2, fail.
    if (!(key ** 2 in frequencyCounter2)) {
      return false;
    }
    //if the keys don't appear in the same frequency, fail.
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      return false;
    }
  }
  return true;
}

// console.log(same([5, 4, 3, 2, 1], [1, 4, 9, 16, 25]));

//Given two strings, write a function to determine if the  second string is an anagram of the first. An anagram is a word, phrase, or name formed by rearranging the letters of another, such as "cinema" and "iceman".

function anagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  let frequencyCounter1 = {};
  let frequencyCounter2 = {};

  for (let char of str1) {
    frequencyCounter1[char] = (frequencyCounter1[char] || 0) + 1;
  }

  for (let char of str2) {
    frequencyCounter2[char] = (frequencyCounter2[char] || 0) + 1;
  }

  for (let key in frequencyCounter1) {
    if (!(key in frequencyCounter2)) {
      return false;
    }

    if (frequencyCounter1[key] !== frequencyCounter2[key]) {
      return false;
    }
  }

  return true;
}

//More concise:
function validAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  const lookup = {};

  for (let i in str1) {
    //letter is each idx in the string
    let letter = str1[i];
    //if the letter exists in lookup as a key add 1 to its value, else add the letter as a key and instantiate it as 1.
    lookup[letter] ? lookup[letter]++ : (lookup[letter] = 1);
  }

  for (let i in str2) {
    //letter is each idx in the string
    let letter = str2[i];

    if (!lookup[letter]) {
      //if the letter doesnt exist in the lookup object/the value is 0 return false.
      return false;
    } else {
      //else subtract one from that letters value.
      lookup[letter]--;
    }
  }

  return true;
}

console.log(validAnagram("poop", "poop"));
