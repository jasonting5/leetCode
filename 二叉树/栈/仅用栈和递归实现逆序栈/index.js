/**
 * 只能用一个栈和递归函数实现逆序栈
 */
const stack = [1, 2, 3, 4, 5]

const getBottom = (stack) => {
  let result = stack.pop()
  if (stack.length === 0) {
    return result // 返回栈底元素
  }
  let last = getBottom(stack) // 一直保持栈底元素
  stack.push(result) // 把非栈底元素一个个push进栈
  return last // 返回栈底元素
}

const reverse = (stack) => {
  if (stack.length === 0) {
    return
  }
  let result = getBottom(stack) // 获取栈底元素
  reverse(stack)
  stack.push(result)
  return stack
}

const res = reverse(stack)
console.log('res', res) // [5,4,3,2,1]