function classPhotos(redShirtHeights, blueShirtHeights) {
  // Write your code here.
  redShirtHeights.sort((a, b) => a - b);
  blueShirtHeights.sort((a, b) => a - b);

  const tallestStudents =
    redShirtHeights[0] > blueShirtHeights[0] ? "RED" : "BLUE";

  for (let i = 0; i < blueShirtHeights.length; i++) {
    if (tallestStudents === "RED") {
      if (redShirtHeights[i] <= blueShirtHeights[i]) {
        return false;
      }
    } else if (tallestStudents === "BLUE") {
      if (redShirtHeights[i] >= blueShirtHeights[i]) {
        return false;
      }
    }
  }

  return true;
}

console.log(classPhotos([5, 8, 1, 3, 4], [6, 9, 2, 4, 5]));
