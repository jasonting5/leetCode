/**
 * 给定一个链表
 * 判断该链表是否是回文结构
 * 有很多种解法，以下给定的是进阶版解法
 * 即如果链表长度为N,时间复杂度达到O(N),额外空间复杂 度达到O(1)
 * 反转右边链表的指针转向，然后左右指针分别向中间遍历，所遍历的节点如果全部相等的话就返回true,否则返回false
 * 结束之后要把链表反转回来
 */
let isPalindrome = function (head) {
  if (!head || !head.next) return true
  let fast = head // 快指针
  let slow = head // 慢指针
  let res = true
  while (fast && fast.next) {
    slow = slow.next // 保存中间点
    fast = fast.next.next
  }
  fast = slow.next // 中间节点的下一个节点
  slow.next = null
  let helpNode = null
  while (fast) {
    // 反转右半部链表
    helpNode = fast.next
    fast.next = slow
    slow = fast
    fast = helpNode
  }
  helpNode = slow // 用于恢复链表
  fast = head
  while (slow && fast) {
    if (slow.val !== fast.val) {
      res = false
      break
    }
    slow = slow.next
    fast = fast.next
  }
  // 恢复原来的链表结构
  slow = helpNode.next
  helpNode.next = null
  while (slow) {
    fast = slow.next
    slow.next = helpNode;
    helpNode = slow;
    slow = fast;
  }
  console.log(transferLinkToStack(head)) // 测试链表是否还原
  return res
};


// test
function ListNode(val) {
  this.val = val;
  this.next = null;
}
let node = new ListNode(1)
node.next = new ListNode(2)
node.next.next = new ListNode(3)
node.next.next.next = new ListNode(2)
node.next.next.next.next = new ListNode(1)

const res = isPalindrome(node)
console.log('res', res)

// 将链表转换成数组，主要为了测试链表最终有没有恢复原状
function transferLinkToStack(link) {
  let stack = []
  while (link) {
    stack.push(link.val)
    link = link.next
  }
  return stack
}