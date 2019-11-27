// 剑指offer面试题50：第一个只出现一次的字符
function FirstNotRepeatingChar(str)
{
  let obj = {};
  for (let i = 0; i < str.length; i++) {
    let strChar = str.charAt(i);
    if (obj.hasOwnProperty(strChar)) {
      obj[strChar] = -1;
    } else {
      obj[strChar] = i;
    }
  }
  for (let key in obj) {
    if (obj[key] !== -1) {
      return obj[key];
    }
  }
  return -1;
}
