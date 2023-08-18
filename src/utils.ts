import { TicTacToeGrid, TicTacToePlayer } from "./types";

export function getWinner(grid: TicTacToeGrid) {
  const players: TicTacToePlayer[] = ["x", "o"];

  for (const player of players) {
    if (
      getRowWinner(grid, player) ||
      getColumnWinner(grid, player) ||
      getDiagonalWinner(grid, player)
    ) {
      return player;
    }
  }

  const gameInProgress = grid.some((row) => row.some((val) => val === null));
  if (!gameInProgress) {
    // game is a draw
    return false;
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
  const rotatedGrid: ("x" | "o" | null)[][] = [];

  for (let i = 0; i < grid.length; i++) {
    rotatedGrid.push([]);
    for (let j = 0; j < grid[i].length; j++) {
      rotatedGrid[i].push(grid[j][i]);
    }
  }

  return getRowWinner(rotatedGrid as TicTacToeGrid, player);
}

export function getDiagonalWinner(
  grid: TicTacToeGrid,
  player: TicTacToePlayer,
) {
  const positions = [0, 1, 2];

  if (positions.every((pos) => grid[pos][pos] === player)) {
    return true;
  }

  const reversedGrid = grid.reverse();
  if (positions.every((pos) => reversedGrid[pos][pos] === player)) {
    return true;
  }

  return false;
}
