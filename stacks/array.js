let stack = [];
let stack2 = [];

//Using push/pop soley in an array to add/remove items, creates a stack.
stack.push("google");
stack.push("instagram");
stack.push("youtube");
stack.pop();

console.log(stack);

//Using unshift/shift soley in an array to add/remove items, creates a stack.
//HOWEVER, with this method our time complexity is much worse. With each item added to the beginning each proceeding item must be re-indexed.
stack2.unshift("Added word");
stack2.unshift("Indented new line");
stack2.unshift("Added word");
stack2.shift();

console.log(stack2);

//As long as the last item added is the first to be removed, you can use either of the two combinations of methods on an array, and create a valid stack!
//LIFO (Last-In-First-Out)
