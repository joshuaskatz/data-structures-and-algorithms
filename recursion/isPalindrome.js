//Write a recursive function called isPalindrome which returns true if the string passed to it is a palindrome.

//Similar to reverse recursive function, use it as the helper function.
function isPalindrome(string) {
  function reverse(string) {
    if (string.length === 0) return "";

    return string[string.length - 1].concat(
      reverse(string.slice(0, string.length - 1))
    );
  }

  return string === reverse(string);
}

// console.log(isPalindrome("poop"));

//Or without a helper function

function isPalindrome2(string) {
  //odd amount of characters in string and 1 left, or 0 left b/c even amount of characters
  if (string.length <= 1) return true;
  //if the first character doesn't match the last it can't be a palindrome
  if (string[0] !== string[string.length - 1]) return false;

  return isPalindrome2(string.slice(1, string.length - 1));
}

console.log(isPalindrome2("amanaplanacanalpanama"));
