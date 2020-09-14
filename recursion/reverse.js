//Write a recursive functin called reverse which accepts a string and returns a new string in reverse.

function reverse(string) {
  //Base case, string length is 0, return "" (nothing)
  if (string.length === 0) return "";

  //Return the last idx in the string and concat that with the function call with the last index sliced off. And so on until the string is empty.
  return string[string.length - 1].concat(
    reverse(string.slice(0, string.length - 1))
  );
}

console.log(reverse("rithmschool"));
