/**
 * 要求用给定的数组构建一棵二叉树
 * 1.数组没有重复元素
 * 2.TreeMax 是一棵二叉树，数组的每一个数对应一个二叉树的节点
 * 3.包括 TreeMax 在内的每一棵子树，值最大的节点都是头节点
 */
let myTree = (data) => {
  this.data = data
  this.left = null
  this.right = null
}

let createTree = (arr) => {
  if (arr.length === 0) return null
  // 先建立头节点
  let head = new myTree(arr.shift())
  let queue = []
  queue.push(head)
  // 层次遍历
  while (queue.length !== 0) {
    const node = queue.shift()
    const left = arr.shift()
    const right = arr.shift()
    if (left) {
      const leftNode = new myTree(left)
      node.left = leftNode
      queue.push(leftNode)
    }
    if (right) {
      const rightNode = new myTree(right)
      node.right = rightNode
      queue.push(rightNode)
    }
  }
  return head
}

let getMaxTree = (arr) => {
  if (arr.length === 0) return null
  // 先将数组按从大到小排序
  arr.sort((s1, s2) => {
    return s2 - s1
  })
  return createTree(arr)
}