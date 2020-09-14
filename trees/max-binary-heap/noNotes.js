class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  insert(val) {
    this.values.push(val);
    let idx = this.values.length - 1;
    let parentIdx = Math.floor((idx - 1) / 2);
    while (this.values[parentIdx] < this.values[idx] && parentIdx >= 0) {
      let temp = this.values[parentIdx];
      this.values[parentIdx] = this.values[idx];
      this.values[idx] = temp;
      idx = parentIdx;
      parentIdx = Math.floor((idx - 1) / 2);
    }
    return this.values;
  }

  extractMax() {
    const end = this.values.pop();
    if (!this.values.length) {
      return end;
    }
    const max = this.values[0];
    this.values[0] = end;
    let i = 0;
    while (true) {
      const left = 2 * i + 1;
      const right = left + 1;

      const maxChildIndex =
        this.values[right] > this.values[left] ? right : left;

      if (this.values[maxChildIndex] > this.values[i]) {
        const temp = this.values[i];
        this.values[i] = this.values[maxChildIndex];
        this.values[maxChildIndex] = temp;

        i = maxChildIndex;
      } else {
        break;
      }
    }

    return max;
  }
}
