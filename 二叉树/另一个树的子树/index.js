// 剑指offer面试题26：树的子结构
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} s
 * @param {TreeNode} t
 * @return {boolean}
 */
var isSubtree = function(s, t) {
  let res = false;
  if (!s || !t) {
    return false;
  }
  if (s.val === t.val) {
    // 判断根结点是否相等
    res = hasChildSubTree(s, t);
  }
  if (!res) {
    // 遍历主树的左结点
    res = isSubtree(s.left, t);
  }
  if (!res) {
    // 遍历主树的右结点
    res = isSubtree(s.right, t);
  }
  return res;
};
var hasChildSubTree = function(s, t) {
  if (!t && !s) {
    // 两个都为空
    return true;
  }
  if (!t || !s) {
    // 有一个不为空
    return false;
  }
  if (s.val !== t.val) {
    // 两个值不想等
    return false;
  }
  return hasChildSubTree(s.left, t.left) && hasChildSubTree(s.right, t.right);
}
