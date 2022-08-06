function classPhotos(redShirtHeights, blueShirtHeights) {
  // Write your code here.
  redShirtHeights.sort((a, b) => a - b);
  blueShirtHeights.sort((a, b) => a - b);
  let counter = 0;
  const shirtColor = redShirtHeights[0] < blueShirtHeights[0] ? "RED" : "BLUE";

  for (let i = 0; i < biggestHeight.length; i++) {
    const redShirtHeight = redShirtHeights[i];
    const blueshirtHeight = blueShirtHeights[i];

    if (shirtColor === "RED") {
      if (redShirtHeight >= blueshirtHeight) {
        return false;
      }
    } else if (blueshirtHeight >= redShirtHeight) {
      return false;
    }
  }

  return true;
}
