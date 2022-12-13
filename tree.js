class Tree {
  constructor() {
      this.root = null;
  }

  hasNode(number) {
    return this.searchRoot(this.root, number)
  }

  searchRoot(root, data) {
    if (!root) {
      return false;
    }
    if (root.data === data) {
      return true;
    }
    if (root.data > data) {
      return this.searchRoot(root.left, data);
    }
    if (root.data < data) {
      return this.searchRoot(root.right, data);
    }
  }

  addNode(node) {
    if (!this.root) {
      this.root = node;
    }
    this.addToRoot(this.root, node);
  }

  addToRoot(root, node) {
    if (root.data > node.data) {
      if (!root.left) {
        root.left = node;
      }
      else {
        this.addToRoot(root.left, node);
      }
    }

    if (root.data < node.data) {
      if (!root.right) {
        root.right = node;
      }
      else {
        this.addToRoot(root.right, node);
      }
    }
  }

}