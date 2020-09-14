// Write a function which takes in a string and returns counts of each
// character in the string.

function charCount(string) {
  //make obj to return at end
  let obj = {};
  //loop over the string, for each character...
  for (let i of string.toLowerCase()) {
    //if the char is not alphanumeric, do nothing
    if (/[a-z0-9]/.test(i)) {
      if (obj[i]) {
        //if the char is a num/letter AND is a key in object, add one to count
        obj[i]++;
      } else {
        //if the char is a num/letter AND not in object, add it and set value to 1
        obj[i] = 1;
      }
    }
  }

  //return obj at end

  console.log(obj);
}

//More concise

function charCount2(string) {
  let obj = {};
  for (let i of string) {
    if (/[a-z0-9]/.test(i)) {
      i = i.toLowerCase();
      obj[i] = ++obj[i] || 1;
    }
  }
  console.log(obj);
}

charCount2("Big ol' chungus!");
