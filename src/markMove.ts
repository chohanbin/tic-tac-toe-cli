import type { Board, Coord, Player } from "./types";

type Param = {
  move: Coord;
  mover: Player;
  board: Board;
};

const markMove = ({ move, mover, board }: Param) => {
  board.cells[move.row][move.col] = mover;
};

export { markMove };
