import { drawToScreen } from "./draw_to_screen.js";

const emptyMatrix = (matrix) => {
  matrix.forEach((row) => {
    row.forEach((column) => {
      column.length = 0;
    });
  });
};

const canMove = (matrix, player, coordinates) => {
  const { x, y } = coordinates;
  let can = true;
  if (matrix[player.y + y] === undefined) {
    return (can = false);
  }
  const nextLocation = matrix[player.y + y][player.x + x];
  if (nextLocation === undefined) {
    return (can = false);
  }
  if (nextLocation.length > 0) {
    nextLocation.forEach((entity) => {
      return (can = entity.passable);
    });
  }
  return can;
};

const redrawEntities = (entities, matrix) => {
  entities.forEach((entity) => {
    matrix[entity.y][entity.x].push(entity);
  });
};

const handleMove = (player, matrix, coordinates) => {
  const { x, y } = coordinates;
  if (canMove(matrix, player, coordinates)) {
    player.x += x;
    player.y += y;
  }
};

const handleImpact = (matrix, coordinates) => {
  const { x, y } = coordinates;
  if (
    matrix[y] === undefined ||
    matrix[y][x] === undefined ||
    matrix[y][x].length <= 0
  ) {
    return;
  }
  matrix[y][x].forEach((entity) => {
    entity.hp -= 1;
    if (entity.hp <= 0) {
      entity.class = "dying";
      entity.passable = true;
    }
  });
};

const handleStrike = (matrix, player) => {
  console.log(player.facing);
  switch (player.facing) {
    case "up":
      handleImpact(matrix, { x: player.x, y: player.y - 1 });
      break;
    case "down":
      handleImpact(matrix, { x: player.x, y: player.y + 1 });

      break;
    case "left":
      handleImpact(matrix, { x: player.x - 1, y: player.y });

      break;
    case "right":
      handleImpact(matrix, { x: player.x + 1, y: player.y });

      break;
  }
};

const handleTurn = (environment, event) => {
  const { matrix, grid, player, entities } = environment;
  switch (event.key) {
    case "ArrowDown":
      handleMove(player, matrix, { x: 0, y: 1 });
      player.facing = "down";
      break;
    case "ArrowUp":
      handleMove(player, matrix, { x: 0, y: -1 });
      player.facing = "up";
      break;
    case "ArrowLeft":
      handleMove(player, matrix, { x: -1, y: 0 });
      player.facing = "left";
      break;
    case "ArrowRight":
      handleMove(player, matrix, { x: 1, y: 0 });
      player.facing = "right";
      break;
  }
  emptyMatrix(matrix);
  redrawEntities(entities, matrix);
  if (event.code === "Space") {
    handleStrike(matrix, player);
  }
  matrix[player.y][player.x].push(player);
  grid.innerHTML = "";
  drawToScreen(matrix, grid);
};

export { handleTurn };
