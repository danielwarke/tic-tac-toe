import "./app.css";
import { useState } from "preact/compat";
import { TicTacToePlayer, emptyGrid } from "./types";

export function App() {
  const [grid, setGrid] = useState(emptyGrid);
  const [turn, setTurn] = useState<TicTacToePlayer>("x");

  return <div></div>;
}
