//VERY SIMPLE EXAMPLE!
const hash = (key, arrayLen) => {
  let total = 0;
  let PRIME = 31;
  for (let i = 0; i < Math.min(key.length, 100); i++) {
    let value = key[i].charCodeAt(0) - 96;
    total = (total * PRIME + value) % arrayLen;
  }
  return total;
};

//AN EXTREMELY SIMPLIFIED EXAMPLE!
class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }

  _hash(key) {
    let total = 0;
    let PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let value = key[i].charCodeAt(0) - 96;
      total = (total * PRIME + value) % this.keyMap.length;
    }
    return total;
  }

  set(key, val) {
    const idx = this._hash(key);
    if (!this.keyMap[idx]) {
      this.keyMap[idx] = [];
    }
    this.keyMap[idx].push([key, val]);
  }

  get(key) {
    const idx = this._hash(key);
    if (this.keyMap[idx]) {
      for (let i = 0; i < this.keyMap[idx].length; i++) {
        if (key === this.keyMap[idx][i][0]) return this.keyMap[idx][i][1];
      }
    }
    return undefined;
  }

  values() {
    let valuesArr = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          if (!valuesArr.includes(this.keyMap[i][j][1])) {
            valuesArr.push(this.keyMap[i][j][1]);
          }
        }
      }
    }
    return valuesArr;
  }

  keys() {
    let keysArr = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          if (!valuesArr.includes(this.keyMap[i][j][0])) {
            keysArr.push(this.keyMap[i][j][0]);
          }
        }
      }
    }
    return keysArr;
  }
}

let ht = new HashTable(4);
ht.set("blue", "green");
ht.set("brown", "yellow");
ht.set("pink", "purple");
ht.set("purple", "purple");
ht.set("af", "asdfa");
console.log(ht.set("purple", "adsfads"));
console.log(ht.get("purple"));
