function classPhotos(redShirtHeights, blueShirtHeights) {
  // Write your code here.
  redShirtHeights.sort((a, b) => a - b);
  blueShirtHeights.sort((a, b) => a - b);

  const shirtColor = redShirtHeights[0] < blueShirtHeights[0] ? "RED" : "BLUE";

  for (let i = 0; i < redShirtHeights.length; i++) {
    const redShirtHeight = redShirtHeights[i];
    const blueShirtHeight = blueShirtHeights[i];

    if (shirtColor === "RED") {
      if (redShirtHeight >= blueShirtHeight) return false;
    } else if (blueShirtHeight >= redShirtHeight) return false;
  }

  return true;
}
