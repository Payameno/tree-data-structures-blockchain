class Tree {
  constructor() {
      this.root = null;
  }

  addNode(node) {

      if (!this.root) {
          this.root = node;
      }

      if (node.data > this.root.data) {
          this.root.right = node;
      }
      
      if (node.data < this.root.data) {
          this.root.left = node;
      }

  }
}

module.exports = Tree;