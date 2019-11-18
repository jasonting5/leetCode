// 剑指offer面试题22：链表中倒数第K个结点
/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
// 当只能遍历一次的时候，可以通过快慢两个指针遍历
function FindKthToTail(head, k) {

  if (!head || !k) {
    return null;
  }
  let frontNode = head;
  let lastNode = head;
  let index = 1;
  while (frontNode.next) {
    frontNode = frontNode.next;
    index++;
    if (index > k) {
      lastNode = lastNode.next;
    }
  }
  return index < k ? null : lastNode;
}
