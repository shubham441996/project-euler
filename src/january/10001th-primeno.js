// 10001st prime

// Problem 7
// By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

// What is the 10001st prime number?

function primeNo(n) {
  let count = 2
  let i = 1
  let no
  while (count < n) {
    let primeDivisbleNo = 6 * i
    if (isPrime(primeDivisbleNo - 1)) {
      no = primeDivisbleNo - 1
      count++
    }
    if (count == n) {
      break
    }
    if (isPrime(primeDivisbleNo + 1)) {
      no = primeDivisbleNo + 1
      count++
    }
    i++
  }
  return no
}

function isPrime(n) {
  if (n < 2) {
    return false
  } else if (n % 2 == 0) {
    return n === 2
  } else if (n % 3 == 0) {
    return n === 3
  }
  let i = 1
  let primeDivisbleNo = 6 * i
  while (Math.floor(n / 2) > primeDivisbleNo) {
    if (n % (primeDivisbleNo + 1) == 0) {
      return false
    }
    if (n % (primeDivisbleNo - 1) == 0) {
      return false
    }
    i++
    primeDivisbleNo = 6 * i
  }

  return true
}

console.log(primeNo(10001))
