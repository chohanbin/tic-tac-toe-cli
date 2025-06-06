import type { Board, Coord } from "./types";

type Param = {
  input: string;
  board: Board;
};

type ValidateMoveResult = {
  valid: boolean;
  move?: Coord;
  error?: string;
};

const validateMove = ({ input, board }: Param): ValidateMoveResult => {
  const hasTwoIntsOnly = /^\s*\d+\s+\d+\s*$/.test(input);

  if (!hasTwoIntsOnly) {
    return {
      valid: false,
      error:
        "Please give a number for X and a number for Y, separated by a space.",
    };
  }

  const [rowToken, colToken] = input.trim().split(/\s+/);

  const rowIndex = Number.parseInt(rowToken) - board.indexOffset;
  const colIndex = Number.parseInt(colToken) - board.indexOffset;

  const areIndicesWithinRange =
    rowIndex >= 0 &&
    rowIndex < board.size &&
    colIndex >= 0 &&
    colIndex < board.size;

  if (!areIndicesWithinRange) {
    return {
      valid: false,
      error: "Please enter a coordinate within the board!",
    };
  }

  if (board.cells[rowIndex][colIndex] !== null) {
    return { valid: false, error: "Alas, that spot is already taken!" };
  }

  return { valid: true, move: { row: rowIndex, col: colIndex } };
};

export { validateMove };
