/**
 * 复制一个复杂链表
 * 在复杂链表中，每个节点除了有一个 next 指针指向下一个节点
 * 还有一个 random 指针指向链表中的任意节点或者 null
 */
let Node = (val, next, random) => {
  this.val = val;
  this.next = next;
  this.random = random;
};
/**
 * 普通解法，利用哈希表
 */
let copyRandomList = (head) => {
  let map = new Map() // 定义一个哈希表
  let cur = head
  while (cur) {
    // 遍历链表，以该节点为key,复制每个节点的副节点作为该节点的值(value)
    // 此时每个副节点的next和random都是null
    map.set(cur, new Node(cur.val))
    cur = cur.next
  }
  cur = head // 继续从头遍历
  while (cur) {
    // 设置每个副节点的next和random
    if (cur.next) {
      map.get(cur).next = map.get(cur.next)
    } else {
      map.get(cur).next = null
    }
    map.get(cur).random = map.get(cur.random)
    cur = cur.next
  }
  return map.get(head)
}

/**
 * 进阶解法 1->1'->2->2'->3->3'
 * 但是js执行用时更久
 */
let copyRandomListUp = (head) => {
  if (!head) return null
  // 复制副节点
  let cur = head,
    next = null,
    copyNode = null
  while (cur) {
    next = cur.next
    cur.next = new Node(cur.val)
    cur.next.next = next
    cur = next
  }
  // 设置每个副节点的random属性
  cur = head
  while (cur) {
    next = cur.next.next
    copyNode = cur.next
    copyNode.random = cur.random ? cur.random.next : null
    cur = next
  }
  // 拆分
  cur = head
  let res = head.next
  while (cur) {
    next = cur.next.next
    copyNode = cur.next
    cur.next = next
    copyNode.next = next ? next.next : null
    cur = next
  }
  return res
}