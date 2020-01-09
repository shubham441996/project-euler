//Problem 5
// 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

// What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

//Solution= > We have to find the lcm of 1 to 20; Lcm(1...20)=1..* ..20/hcf(1...20)

function hcfOfTwoNumber(m, n) {
  if (m % n != 0) {
    return hcfOfTwoNumber(n, m % n)
  }
  return n
}

function factorial(n) {
  if (n == 1) {
    return 1
  }
  return n * factorial(n - 1)
}

function smallestNumber(n) {
  let multiple = factorial(n)
  let lcm = 1
  for (let i = 1; i <= 20; i++) {
    lcm = (lcm * i) / hcfOfTwoNumber(i, lcm)
  }
  return lcm
}
console.log(smallestNumber(20))
