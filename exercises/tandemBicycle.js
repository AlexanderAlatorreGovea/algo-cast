// the tandem bicycle is the fastest speed
// redShirts and blueShirts arrays [rider1Num, rider2Num]
// pair redShirts with BlueShirts in tandem bicycle
// func should return the max total speed or the min total speed of all
// tandem bicycles based on input param fastest
// if fastest = true, then return fastest total speed

function tandemBicycle(redShirtSpeeds, blueShirtSpeeds, fastest) {
  redShirtSpeeds.sort((a, b) => b - a);
  blueShirtSpeeds.sort((a, b) => (fastest ? a - b : b - a));

  let result = 0;

  for (let index = 0; index < redShirtSpeeds.length; index++) {
    result += Math.max(redShirtSpeeds[index], blueShirtSpeeds[index]);
  }

  return result;
}

console.log(tandemBicycle([5, 5, 3, 9, 2], [3, 6, 7, 2, 1], false));
