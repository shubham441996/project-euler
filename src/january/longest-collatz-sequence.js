// Longest Collatz sequence

// Problem 14
// The following iterative sequence is defined for the set of positive integers:

// n → n/2 (n is even)
// n → 3n + 1 (n is odd)

// Using the rule above and starting with 13, we generate the following sequence:

// 13 → 40 → 20 → 10 → 5 → 16 → 8 → 4 → 2 → 1
// It can be seen that this sequence (starting at 13 and finishing at 1) contains 10 terms. Although it has not been proved yet (Collatz Problem), it is thought that all starting numbers finish at 1.

// Which starting number, under one million, produces the longest chain?

// NOTE: Once the chain starts the terms are allowed to go above one million.

function longestCollatzSequence(n) {
  let cache = {}
  let maxChain = { number: 0, maxCount: 0 }
  for (let i = 2; i < n; i++) {
    let num = i
    let count = 0
    while (num !== 1) {
      if (cache[num]) {
        count += cache[num]
        break
      } else if (num % 2 == 0) {
        num /= 2
      } else {
        num = 3 * num + 1
      }
      count++
    }
    if (maxChain.maxCount < count) {
      maxChain.maxCount = count
      maxChain.number = i
    }
    cache[i] = count
  }
  return maxChain.number
}
console.time()
console.log(longestCollatzSequence(1000000))
console.timeEnd()
