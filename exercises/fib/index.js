// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

// O(n) or linear complexity
// it is a for loop that has a fix number going to a fix target so linear
function fib(n) {
  const results = [0, 1];

  for (let i = 2; i <= n; i++) {
    //previews two records
    const previewsNumber = results[i - 1]; //1
    const previewsTwoNumbers = results[i - 2]; //0

    results.push(previewsNumber + previewsTwoNumbers);
  }

  return results[n];
}

// recursive Solution
function fibonacci() {}

module.exports = fib;
