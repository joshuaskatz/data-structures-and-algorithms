function countdown(num) {
  //base case. returning removes this from the call stack, cascading the rest of the stack.
  if (num <= 0) {
    console.log("all done");
    return;
  }

  console.log(num);
  num--;
  countdown(num);
}

countdown(10);
