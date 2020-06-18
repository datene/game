const drawMatrix = (amount) => {
  const matrix = [];
  for (let rowStep = 0; rowStep < amount; rowStep++) {
    const row = [];
    for (let columnStep = 0; columnStep < amount; columnStep++) {
      row.push([]);
    }
    matrix.push(row);
  }
  return matrix;
};

export { drawMatrix };
