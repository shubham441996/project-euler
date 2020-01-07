// The prime factors of 13195 are 5, 7, 13 and 29.

// What is the largest prime factor of the number 600851475143 ?

function largestPrimeFactor(n) {
  let maxPrime = 2
  while (n % 2 == 0) {
    n = n / 2
  }
  for (let i = 3; i < n; i += 2) {
    while (n % i == 0) {
      maxPrime = i
      n = n / i
    }
  }
  console.log(maxPrime)
}

largestPrimeFactor(40)
