const initiateSpawn = (grid) => {
  const half = Math.ceil(grid.length / 2);
  const middle = grid[half][half];
  const player = {
    id: "player",
    hp: 10,
    x: half,
    y: half,
    passable: false,
    facing: "up",
  };
  middle.push(player);
  return player;
};

export { initiateSpawn };
