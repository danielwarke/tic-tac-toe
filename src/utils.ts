import { TicTacToeGrid, TicTacToePlayer, emptyGrid } from "./types";

export function getWinner(grid: TicTacToeGrid) {
  const players: TicTacToePlayer[] = ["x", "o"];

  for (const player of players) {
    if (
      getRowWinner(grid, player) &&
      getColumnWinner(grid, player) &&
      getDiagonalWinner(grid, player)
    ) {
      return player;
    }
  }

  return null;
}

export function getRowWinner(grid: TicTacToeGrid, player: TicTacToePlayer) {
  for (const row of grid) {
    if (row.every((val) => val === player)) {
      return true;
    }
  }

  return false;
}

export function getColumnWinner(grid: TicTacToeGrid, player: TicTacToePlayer) {
  const transformedGrid = emptyGrid;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      transformedGrid[j][i] = grid[i][j];
    }
  }

  return getRowWinner(transformedGrid, player);
}

export function getDiagonalWinner(
  grid: TicTacToeGrid,
  player: TicTacToePlayer,
) {
  const positions = [0, 1, 2];

  if (positions.every((pos) => grid[pos][pos] === player)) {
    return true;
  }

  if (positions.reverse().every((pos) => grid[pos][pos] === player)) {
    return true;
  }

  return false;
}
