class HashTable {
  constructor(size = 4) {
    this.keyMap = new Array(size);
  }
  _hash(key) {
    let total = 0;
    let prime = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96
      total = (total * prime + value) % this.keyMap.length
    }
    return total;
  }
  setItem(key, value) {
    let index = this._hash(key);
    if (!this.keyMap[index]) {
      this.keyMap[index] = [];
    }
    this.keyMap[index].push([key, value]);
  }
  getItem(key) {
    let index = this._hash(key);
    if (this.keyMap[index]) {
      for (let i = 0; i < this.keyMap[index].length; i++) {
        if (this.keyMap[index][i][0] === key) {
          return this.keyMap[index][i][1]
        }
      }
    }
    return undefined;
  }

}

let hash = new HashTable();
hash.setItem('lskdafjdsf', 'blleh')
hash.setItem('lskdsadfsdafjdsf', 'hi')
hash.setItem('asdf', 'stuff')
hash.setItem('sadfve', 'thing')
hash.setItem('sdsa', 'other thing')
hash.setItem('wat', 'other thing')
hash.getItem('wat')