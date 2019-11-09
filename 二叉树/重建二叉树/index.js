// 剑指offer面试题7：重建二叉树
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
  if (preorder.length === 0) {
    return null;
  }
  if (preorder.length === 1) {
    return new TreeNode(preorder[0]);
  }

  let firstNode = preorder[0]; // 从前序遍历获取根结点
  let index = inorder.indexOf(firstNode); // 获取根结点在中序遍历中的位置

  let inOrderLeft = inorder.slice(0, index);
  let inOrderRight = inorder.slice(index + 1);
  let preOrderLeft = preorder.slice(1,index + 1);
  let preOrderRight = preorder.slice(index + 1);

  let newTree = new TreeNode(firstNode);
  newTree.left = buildTree(preOrderLeft, inOrderLeft);
  newTree.right = buildTree(preOrderRight, inOrderRight);
  return newTree;
};

