export type TicTacToePlayer = "x" | "o";
export type TicTacToeCell = TicTacToePlayer | null;
export type TicTacToeRow = [TicTacToeCell, TicTacToeCell, TicTacToeCell];
export type TicTacToeGrid = [TicTacToeRow, TicTacToeRow, TicTacToeRow];

export const emptyRow: TicTacToeRow = [null, null, null];
export const emptyGrid: TicTacToeGrid = [emptyRow, emptyRow, emptyRow];
