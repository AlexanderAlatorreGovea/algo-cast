// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

// it is a for loop that has a fix number going to a fix target so linear
function fib(n) {
  const results = [0, 1];

  for (let i = 2; i <= n; i++) {
    const previousNumber = results[i - 1];
    const previewsTwoNumbers = results[i - 2];

    results.push(previousNumber + previewsTwoNumbers);
  }

  return results[n];
}
console.log(fib(4));

////////////////////////////////////////////////////////////////////////////////////////////////
// recursive Solution
// log(n)
// bad time complexity
// Exponential runtime because it calls the function time and time again (look at the diagram)
// for every call to n we are calling another function
function fibonacci(n) {
  if (n < 2) return n;

  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(4));

////////////////////////////////////////////////////////////////////////////////////////////////
function memoize(fn) {
  const cache = {};
  
  return function (...args) {
    if (cache[args]) {
      return cache[args];
    }

    const result = fn.apply(this, args);
    cache[args] = result;

    return result;
  };
}

function slowFib(n) {
  if (n < 2) {
    return n;
  }

  return memoizedFib(n - 1) + memoizedFib(n - 2);
}

const memoizedFib = memoize(slowFib);
console.log(fib(4));

// to improve the runtime complexity you can memoize

module.exports = fib;
