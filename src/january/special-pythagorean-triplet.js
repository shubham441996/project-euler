// Problem 9
// A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,

// a2 + b2 = c2
// For example, 32 + 42 = 9 + 16 = 25 = 52.

// There exists exactly one Pythagorean triplet for which a + b + c = 1000.
// Find the product abc.

function pythagorasTriplet(n) {
  for (let i = 1; i <= n / 3; i++) {
    for (let j = i + 1; j <= n / 2; j++) {
      let k = n - i - j
      if (i * i + j * j === k * k) {
        return i * j * k
      }
    }
  }
}

pythagorasTriplet(1000)
