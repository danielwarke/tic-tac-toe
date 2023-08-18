import "./app.css";
import { useEffect, useState } from "preact/compat";
import { emptyGrid, TicTacToePlayer } from "./types";
import { getWinner } from "./utils.ts";

export function App() {
  const [grid, setGrid] = useState(emptyGrid);
  const [turn, setTurn] = useState<TicTacToePlayer>("x");
  const [winner, setWinner] = useState<TicTacToePlayer | "draw">();

  function playerChoiceHandler(rowIndex: number, cellIndex: number) {
    if (grid[rowIndex][cellIndex] || winner) {
      // there is already a value in this cell or game is over
      return;
    }

    // @ts-ignore
    setGrid((currGrid) => {
      return currGrid.map((row, rowIdx) =>
        row.map((cell, cellIdx) => {
          if (rowIdx === rowIndex && cellIdx === cellIndex) {
            return turn;
          }

          return cell;
        }),
      );
    });
  }

  useEffect(() => {
    const gameWinner = getWinner(grid);
    if (gameWinner === null) {
      // game is still in progress
      setTurn((currTurn) => (currTurn === "x" ? "o" : "x"));
      return;
    }

    setWinner(gameWinner === false ? "draw" : gameWinner);
  }, [grid]);

  function reset() {
    setGrid(emptyGrid);
    setWinner(undefined);
  }

  return (
    <div>
      <div className="grid">
        {grid.map((row, rowIndex) => (
          <div key={rowIndex} className="grid-row">
            {row.map((cell, cellIndex) => (
              <div
                key={cellIndex}
                className="grid-cell"
                onClick={() => playerChoiceHandler(rowIndex, cellIndex)}
              >
                {typeof cell === "string" ? cell.toUpperCase() : cell}
              </div>
            ))}
          </div>
        ))}
      </div>
      {winner ? (
        <div>
          <h2>
            {winner === "draw"
              ? "😕 The game is a draw"
              : `🎉 ${winner.toUpperCase()} is the winner!`}
          </h2>
          <button className="play-again" onClick={reset}>
            Play again?
          </button>
        </div>
      ) : (
        <h2>{`Current turn: ${turn.toUpperCase()}`}</h2>
      )}
    </div>
  );
}
