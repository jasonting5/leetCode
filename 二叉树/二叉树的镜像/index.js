// 剑指offer面试题27：求二叉树的镜像

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
// 1.递归算法：
var invertTree = function(root) {
  if (!root) {
    return root;
  }
  if (!root.left && !root.right) {
    return root;
  }
  let tempNode = root.left;
  root.left = root.right;
  root.right = tempNode;

  if (root.left) {
    invertTree(root.left);
  }
  if (root.right) {
    invertTree(root.right);
  }
  return root;
};

// 2.遍历算法（队列或者栈）
var invertTree = function(root) {
  if (!root) {
    return root;
  }
  let stack = [];
  stack.push(root);
  while (stack.length > 0) {
    // 当队列不为空的时候
    // 取队头元素
    let parentNode = stack.shift();
    // 交换左右孩子结点
    let tempNode = parentNode.left;
    parentNode.left = parentNode.right;
    parentNode.right = tempNode;

    if (parentNode.left) {
      stack.push(parentNode.left);
    }
    if (parentNode.right) {
      stack.push(parentNode.right);
    }
  }
  return root;
};
