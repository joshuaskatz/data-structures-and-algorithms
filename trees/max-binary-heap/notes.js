class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  //Push the value into the values property on the heap
  //Bubble up:
  //  Create a variable called index wich in the length of the values property-1
  //  Create a variable called parentIndex with is the floor of the (index-1)/2
  //  Keep looping as long as the values element at the parentIndex is less     //  than the values element at the child index:
  //      Swap the value of the values element at the parentIndex with the
  //      value of the element property at the child index
  //      Set the index to be the parentIndex and start over
  insert(val) {
    this.values.push(val);
    let idx = this.values.length - 1;
    let parentIdx = Math.floor((idx - 1) / 2);
    while (this.values[parentIdx] < this.values[idx] && parentIdx >= 0) {
      //Swap
      let temp = this.values[parentIdx];
      this.values[parentIdx] = this.values[idx];
      this.values[idx] = temp;
      //Update both indicies
      idx = parentIdx;
      parentIdx = Math.floor((idx - 1) / 2);
    }
    return this.values;
  }

  extractMax() {
    //Pop of last val in array
    const end = this.values.pop();
    //If the array is empty finish and return end.
    if (!this.values.length) {
      return end;
    }
    //Save the max to variable so we can return it.
    const max = this.values[0];
    //Replace the max with the value from the end.
    this.values[0] = end;
    //Define i (index), starting at the root of the array (index of 0)
    let i = 0;
    while (true) {
      //Define left and right child indicies
      const left = 2 * i + 1;
      const right = left + 1;

      //If the value of the right child is greater than the value of the left child, set the maxChildIndex to the current right child index, else set it to the left.
      //The max child index is simply the index of the larger child.
      const maxChildIndex =
        this.values[right] > this.values[left] ? right : left;

      //If the child is greater than the parent, swap the values and then set the index to the child's index.
      if (this.values[maxChildIndex] > this.values[i]) {
        const temp = this.values[i];
        this.values[i] = this.values[maxChildIndex];
        this.values[maxChildIndex] = temp;

        i = maxChildIndex;
      } else {
        //Repeat this until neither child is greater than the parent.
        break;
      }
    }
    //Return the original max value.
    return max;
  }
}

let heap = new MaxBinaryHeap();
heap.insert(97);
heap.insert(61);
heap.insert(78);
heap.insert(50);
heap.insert(45);
heap.insert(42);
heap.insert(40);
heap.insert(20);
heap.insert(23);
heap.insert(36);
heap.insert(24);
heap.insert(29);

console.log(heap.extractMax());
console.log(heap);
