// 剑指offer面试题23：链表中环的入口节点
/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function EntryNodeOfLoop(pHead) {
  if (!pHead || !pHead.next) {
    return null;
  }
  // 首先判断是否是环
  let p1 = pHead.next;
  let p2 = pHead.next.next;
  while (p1 != p2) {
    if (!p2 || !p2.next) {
      return null;
    }
    p1 = p1.next;
    p2 = p2.next.next;
  }
  // 获取环的长度
  let len = 1; // 5
  let temp = p1;
  p1 = p1.next;
  while (p1 != temp) {
    p1 = p1.next;
    len++;
  }
  p1 = pHead;
  p2 = pHead;
  while (len-- > 0) {
    p1 = p1.next;
  }
  while (p1 != p2) {
    p1 = p1.next;
    p2 = p2.next;
  }
  return p1;
}
