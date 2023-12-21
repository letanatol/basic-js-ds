const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.rootNode = null;
  }

  root() {
    return this.rootNode;
  }

  add(data) {
    this.rootNode = this.addNode(this.rootNode, data);
  }

  addNode(node, data) {
    if (!node) return new Node(data);
    if (node.data === data) return node;

    if (data < node.data) {
      node.left = this.addNode(node.left, data);
    } else {
      node.right = this.addNode(node.right, data);
    }

    return node;
  }

  has(data) {
    return this.hasNode(this.rootNode, data);
  }

  hasNode(node, data) {
    if (!node) return false;
    if (node.data === data) return true;

    return (data > node.data)
      ? this.hasNode(node.right, data)
      : this.hasNode(node.left, data);
  }

  find(data) {
    return this.findNode(this.rootNode, data);
  }

  findNode(node, data) {
    if (!node) return null;
    if (node.data == data) return node;

    return (data > node.data)
      ? this.findNode(node.right, data)
      : this.findNode(node.left, data);
  }

  remove(data) {
    this.rootNode = this.removeNode(this.rootNode, data);
  }

  removeNode(node, data) {
    if (!node) return null;

    if (data > node.data) {
      node.right = this.removeNode(node.right, data);

      return node;

    } else if (data < node.data) {
      node.left = this.removeNode(node.left, data);

      return node;

    } else {
      if (!node.left && !node.right) return null;

      if (!node.right) {
        node = node.left;
        return node;
      }

      if (!node.left) {
        node = node.right;
        return node;
      }

      let maxLeft = node.left;
      while (maxLeft.right) maxLeft = maxLeft.right;
      node.data = maxLeft.data;
      node.left = this.removeNode(node.left, maxLeft.data);

      return node;
    }
  }

  min() {
    if (!this.rootNode) return null;

    let node = this.rootNode;

    while (node.left) node = node.left;

    return node.data;
  }

  max() {
    if (!this.rootNode) return null;

    let node = this.rootNode;

    while (node.right) node = node.right;

    return node.data;
  }
}

module.exports = {
  BinarySearchTree
};