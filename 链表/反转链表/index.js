// 剑指offer面试题24：反转链表 （需要三个结点）
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
  let returnLink = null;
  let preNode = null; // 上一个结点
  let currentNode = head; // 当前结点

  while (currentNode) {
      let nextNode = currentNode.next; // 下一个结点

      if (!nextNode) {
          // 把头结点指向尾结点
          returnLink = currentNode;
      }

      // 反转操作
      currentNode.next = preNode;
      preNode = currentNode;
      currentNode = nextNode;
  }
  return returnLink;
};
