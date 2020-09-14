//Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in. You can solve this using the frequency counter pattern OR the multiple pointers pattern.

//Use the args object and set each arg to the key with the frequency at which they appear.
function areThereDuplicates() {
  let lookup = {};

  for (let i in arguments) {
    lookup[arguments[i]] = ++lookup[arguments[i]] || 1;
  }

  for (let j in lookup) {
    if (lookup[j] > 1) {
      return true;
    }
  }

  return false;
}

console.log(areThereDuplicates(1, 2, 3));

//One liner solution
function areThereDuplicates() {
  return new Set(arguments).size !== arguments.length;
}
