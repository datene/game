const getRandomInRange = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const placeIfPossible = (matrix) => {
  const randomX = getRandomInRange(0, matrix.length - 1);
  const randomY = getRandomInRange(0, matrix.length - 1);

  const possibleLocation = matrix[randomY][randomX];
  let passable = true;
  if (possibleLocation.length > 0) {
    possibleLocation.forEach((entityPresent) => {
      if (entityPresent.passable) next;
      passable = false;
    });
  }
  if (possibleLocation === undefined) {
    passable = false;
  }
  if (passable) {
    const entity = {
      class: "tree",
      hp: 5,
      passable: false,
      x: randomX,
      y: randomY,
    };
    possibleLocation.push(entity);
    return entity;
  } else {
    return placeIfPossible(matrix);
  }
};

const drawEntities = (matrix, entityAmount) => {
  const entities = [];
  for (let entityIndex = 0; entityIndex < entityAmount; entityIndex++) {
    entities.push(placeIfPossible(matrix));
  }
  return entities;
};

export { drawEntities };
