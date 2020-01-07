function largestPallindromeProduct() {
  let maxProduct = 0
  for (let i = 999; i > 99; i--) {
    for (let j = 999; j > 99; j--) {
      let multiple = i * j
      if (isPallindrome(multiple)) {
        if (maxProduct < multiple) {
          maxProduct = multiple
        }
      }
    }
  }
  return maxProduct
}

function isPallindrome(n) {
  let stringNumber = String(n)
  let count = stringNumber.length
  for (let i = 0; i <= Math.floor(count / 2); i++) {
    if (stringNumber.charAt(i) != stringNumber.charAt(count - 1 - i)) {
      return false
    }
  }
  return true
}
largestPallindromeProduct()
