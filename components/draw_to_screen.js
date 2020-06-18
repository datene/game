const drawEntity = (entity) => {
  const entityElement = document.createElement("div");
  if (entity.id) entityElement.id = entity.id;
  if (entity.class) entityElement.classList.add(entity.class);
  if (entity.hp <= 0) {
    entity.class = "dead";
  }
  return entityElement;
};

const drawToScreen = (matrix, destination) => {
  matrix.forEach((row) => {
    const rowElement = document.createElement("div");
    row.forEach((column) => {
      const columnElement = document.createElement("div");
      rowElement.insertAdjacentElement("beforeend", columnElement);
      if (column.length === 0) return;
      column.forEach((entity) => {
        const entityElement = drawEntity(entity);
        columnElement.insertAdjacentElement("beforeend", entityElement);
      });
    });
    destination.insertAdjacentElement("beforeend", rowElement);
  });
};

export { drawToScreen };
