// Power digit sum

// Problem 16
// 215 = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.

// What is the sum of the digits of the number 21000?
//NOTE: This will work for smaller no it will not work for n=1000
function powerDigitSum(n) {
  let digit = Math.pow(2, n)
  let sum = 0
  while (digit > 0) {
    sum = sum + (digit % 10)
    digit = Math.floor(digit / 10)
  }
  return sum
}
function solution(exp) {
  let order = 0
  let digits = Math.floor(1 + (exp * Math.LN2) / Math.LN10)

  let number = new Uint8Array(digits)

  number[0] = 1

  for (let i = 0; i < exp; i++) {
    let carry = 0

    for (let j = 0; j <= order; j++) {
      let product = 2 * number[j] + carry
      number[j] = product % 10
      carry = (product / 10) | 0

      if (j === order && carry > 0) {
        order++
      }
    }
  }
  console.table(number)
  return number.reduce((p, x) => x + p, 0)
}

const result = solution(1000)
console.log(result)
