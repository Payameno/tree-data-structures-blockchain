class MerkleTree {
  constructor(leaves, concat) {
      this.array = leaves;
      this.funConcat = concat;
  }
  getRoot() {
      return this.funConcat(this.array[0], this.array[1]);
  }
}