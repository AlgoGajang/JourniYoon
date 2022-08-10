/**
 * @param {number[]} arr
 * @return {number}
 */
var numFactoredBinaryTrees = function (arr) {
  let count = 0;
  for (node of arr) {
    node = new BinarySearchTree(node);
    count++;
    for (let i = 0; i < arr.indexOf(node.value); i++) {
      node.insert(arr[i]);
      if (node.left.value === node.right.value) count++;
      else if (node.left.value !== node.right.value) count += 2;
    }
  }
  return count;
};

class BinarySearchTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
  insert(value) {
    if (!(this.value % value) && this.left === null) {
      this.left = new BinarySearchTree(value);
      this.right = new BinarySearchTree(this.value / value);
    }
  }
}
