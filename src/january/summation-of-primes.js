// Summation of primes

// Problem 10
// The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.

// Find the sum of all the primes below two million.
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

function summationOfPrimes(n) {
  let sum = 5
  for (let i = 5; i < n; i++) {
    if (isPrime(i)) {
      sum += i
    }
  }
  return sum
}

console.log(summationOfPrimes(2000000))
