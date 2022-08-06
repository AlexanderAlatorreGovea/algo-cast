export const productSum = (array, depths = 1) => {
  let result = 0;

  for (let i = 0; i < array.length; i++) {
    if (!Array.isArray(array[i])) {
      result += array[i];
    } else {
      const nextLevelDepths = depths + 1;

      result += productSum(array[i], nextLevelDepths) * nextLevelDepths;
    }
  }

  return result;
};
