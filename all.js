import { drawMatrix } from "./components/draw_matrix.js";
import { initiateSpawn } from "./components/initiate_spawn.js";
import { drawToScreen } from "./components/draw_to_screen.js";
import { handleTurn } from "./components/handle_turn.js";
import { drawEntities } from "./components/draw_entities.js";

const entityAmount = 580;
const matrixSize = 50;

const grid = document.querySelector("#grid");
const matrix = drawMatrix(matrixSize);

const player = initiateSpawn(matrix);
const entities = drawEntities(matrix, entityAmount);
drawToScreen(matrix, grid);

document.addEventListener(
  "keyup",
  handleTurn.bind(event, {
    matrix: matrix,
    grid: grid,
    player: player,
    entities: entities,
  })
);
