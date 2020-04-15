/**
 * 
 
  输入是一个无符号整数，返回其二进制表达式中数字位数为 ‘1’ 的个数
  输入：00000000000000000000000000001011
  输出：3
  解释：输入的二进制串 00000000000000000000000000001011 中，共有三位为 '1'。

 */

function hammingWeight(n) {
  let count = 0;
  while (n) {
    count++;
    n = n & (n - 1)
  }
  return count;
}

function __test__() {
  const count = hammingWeight(255);
  console.log(count);
}

__test__();
