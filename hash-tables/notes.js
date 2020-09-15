//Hash function that works on strings only (alphbetic characters)
//VERY SIMPLE EXAMPLE!
const hash = (key, arrayLen) => {
  let total = 0;
  let PRIME = 31;
  //Set the threshhold of how many loops will execute. This way we achieve constant time. Minimum is the length of the key and the max is 100.
  for (let i = 0; i < Math.min(key.length, 100); i++) {
    let value = key[i].charCodeAt(0) - 96;
    //The prime number in the hash is helpful in spreading out the keys more uniformly. It's also helpful if the array that you're putting values into has a prime length.
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

  //Accepts a key and a value
  //Hashes the key
  //Stores the key-value pair in the hash table array via separate chaining.
  set(key, val) {
    const idx = this._hash(key);
    //If there is no value at that index, create a bucket.
    if (!this.keyMap[idx]) {
      this.keyMap[idx] = [];
    }
    //Either way we push key-value pair in.
    this.keyMap[idx].push([key, val]);
  }
  //Accepts a key
  //Hashes the key
  //Retrieve the key value pair in the hash table
  //If the key isn't found, return undefined
  get(key) {
    const idx = this._hash(key);
    //Check to avoid throwing an error in the loop.
    //If there is no array at that index, the loop will fail.
    if (this.keyMap[idx]) {
      for (let i = 0; i < this.keyMap[idx].length; i++) {
        if (key === this.keyMap[idx][i][0]) return this.keyMap[idx][i][1];
      }
    }
    return undefined;
  }

  //Loops through the hash table and returns an array of values from the table.
  values() {
    let valuesArr = [];
    //Loop through table
    for (let i = 0; i < this.keyMap.length; i++) {
      //If there is a bucket at that index
      if (this.keyMap[i]) {
        //Loop throught that bucket
        for (let j = 0; j < this.keyMap[i].length; j++) {
          //We want unique values only. If already in the array don't push.
          if (!valuesArr.includes(this.keyMap[i][j][1])) {
            //Push the VALUE (idx of 1) into the valuesArr
            valuesArr.push(this.keyMap[i][j][1]);
          }
        }
      }
    }
    return valuesArr;
  }
  //Loops through the hash table and returns an array of keys from the table.
  keys() {
    let keysArr = [];
    //Loop through table
    for (let i = 0; i < this.keyMap.length; i++) {
      //If there is a bucket at that index
      if (this.keyMap[i]) {
        //Loop throught that bucket
        for (let j = 0; j < this.keyMap[i].length; j++) {
          //We want unique values only. If already in the array don't push.
          if (!valuesArr.includes(this.keyMap[i][j][0])) {
            //Push the KEY (idx of 0) into the keysArr
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
