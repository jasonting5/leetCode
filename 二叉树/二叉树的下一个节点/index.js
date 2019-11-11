// 剑指offer面试题8：二叉树的下一个节点
/*function TreeLinkNode(x){
    this.val = x;
    this.left = null;
    this.right = null;
    this.next = null;
}*/
function GetNext(pNode) {
  if (!pNode) {
    return false;
  }

  let pNext = null;

  if (pNode.right) {

    let pRight = pNode.right;
    while (pRight.left) {
      pRight = pRight.left;
    }

    pNext = pRight;
  } else if (pNode.next){

    let pCurrent = pNode;
    let pParent = pNode.next;

    while (pParent && pCurrent === pParent.right) {
      pCurrent = pParent;
      pParent = pParent.next;
    }

    pNext = pParent;
  }
  return pNext;
}
