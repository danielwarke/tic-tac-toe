import { describe, expect, test } from "vitest";
import { TicTacToeGrid } from "./types.ts";
import {
  getColumnWinner,
  getDiagonalWinner,
  getRowWinner,
  getWinner,
} from "./utils.ts";

describe("getRowWinner()", () => {
  test("x is winner", () => {
    const testGrid: TicTacToeGrid = [
      ["o", null, "x"],
      [null, null, "o"],
      ["x", "x", "x"],
    ];

    expect(getRowWinner(testGrid, "x")).toBe(true);
    expect(getRowWinner(testGrid, "o")).toBe(false);
  });

  test("o is winner", () => {
    const testGrid: TicTacToeGrid = [
      ["o", "o", "o"],
      [null, null, "o"],
      ["o", null, "x"],
    ];

    expect(getRowWinner(testGrid, "x")).toBe(false);
    expect(getRowWinner(testGrid, "o")).toBe(true);
  });

  test("no winners", () => {
    const testGrid: TicTacToeGrid = [
      ["o", "x", "o"],
      [null, null, "o"],
      ["o", null, "x"],
    ];

    expect(getRowWinner(testGrid, "x")).toBe(false);
    expect(getRowWinner(testGrid, "o")).toBe(false);
  });
});

describe("getColumnWinner()", () => {
  test("x is winner", () => {
    const testGrid: TicTacToeGrid = [
      ["o", "x", "x"],
      [null, "x", "o"],
      [null, "x", "x"],
    ];

    expect(getColumnWinner(testGrid, "x")).toBe(true);
    expect(getColumnWinner(testGrid, "o")).toBe(false);
  });

  test("o is winner", () => {
    const testGrid: TicTacToeGrid = [
      ["x", null, "o"],
      [null, null, "o"],
      ["x", null, "o"],
    ];

    expect(getColumnWinner(testGrid, "x")).toBe(false);
    expect(getColumnWinner(testGrid, "o")).toBe(true);
  });

  test("no winners", () => {
    const testGrid: TicTacToeGrid = [
      ["o", "x", "o"],
      [null, null, "o"],
      ["o", null, "x"],
    ];

    expect(getColumnWinner(testGrid, "x")).toBe(false);
    expect(getColumnWinner(testGrid, "o")).toBe(false);
  });
});

describe("getDiagonalWinner()", () => {
  test("x is winner", () => {
    const testGrid: TicTacToeGrid = [
      ["x", "o", "o"],
      [null, "x", "o"],
      [null, "x", "x"],
    ];

    expect(getDiagonalWinner(testGrid, "x")).toBe(true);
    expect(getDiagonalWinner(testGrid, "o")).toBe(false);
  });

  test("o is winner", () => {
    const testGrid: TicTacToeGrid = [
      ["x", null, "o"],
      [null, "o", null],
      ["o", null, "o"],
    ];

    expect(getDiagonalWinner(testGrid, "x")).toBe(false);
    expect(getDiagonalWinner(testGrid, "o")).toBe(true);
  });

  test("no winners", () => {
    const testGrid: TicTacToeGrid = [
      ["o", "x", "o"],
      [null, null, "o"],
      ["o", null, "x"],
    ];

    expect(getDiagonalWinner(testGrid, "x")).toBe(false);
    expect(getDiagonalWinner(testGrid, "o")).toBe(false);
  });
});

describe("getWinner()", () => {
  test("x is row winner", () => {
    const testGrid: TicTacToeGrid = [
      [null, "o", "o"],
      ["x", "x", "x"],
      [null, "o", "x"],
    ];

    expect(getWinner(testGrid)).toBe("x");
  });

  test("x is column winner", () => {
    const testGrid: TicTacToeGrid = [
      [null, null, "x"],
      ["o", "o", "x"],
      [null, "o", "x"],
    ];

    expect(getWinner(testGrid)).toBe("x");
  });

  test("o is diagonal winner", () => {
    const testGrid: TicTacToeGrid = [
      ["x", null, "o"],
      [null, "o", null],
      ["o", null, "o"],
    ];

    expect(getWinner(testGrid)).toBe("o");
  });

  test("game in progress", () => {
    const testGrid: TicTacToeGrid = [
      ["o", "x", "o"],
      [null, "x", "o"],
      ["o", null, "x"],
    ];

    expect(getWinner(testGrid)).toBeNull();
  });

  test("game is a draw", () => {
    const testGrid: TicTacToeGrid = [
      ["o", "x", "o"],
      ["x", "x", "o"],
      ["o", "o", "x"],
    ];

    expect(getWinner(testGrid)).toEqual(false);
  });
});
