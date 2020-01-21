// Lattice paths

// Problem 15
// Starting in the top left corner of a 2×2 grid, and only being able to move to the right and down, there are exactly 6 routes to the bottom right corner.

// How many such routes are there through a 20×20 grid?

function latticePaths(n) {
  let arr = new Array(n)
  for (let i = 0; i < n; i++) {
    arr[i] = new Array(n).fill(1)
    for (let j = 0; j < n; j++) {
      if (i != 0 && j != 0) {
        arr[i][j] = arr[i][j - 1] + arr[i - 1][j]
      }
    }
  }
  console.table(arr[n - 1][n - 1])
}
latticePaths(21)
