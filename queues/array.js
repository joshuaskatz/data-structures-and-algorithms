let queue = [];

//If we add to the beginning, we must remove from the end, so we can either use a combination of unshift/pop or push/shift.
//Removing from the beginning will negatively affect our big O, as we will have to re-index the subsequent elements in the array.
//Adding to the beginning will also negatively affect our big O, as we will have to re-index the subsequent elements in the array.
queue.push(1);
queue.push(2);
queue.push(3);
queue.shift();

console.log(queue);

//If performance is a concern, use a custom class list.
