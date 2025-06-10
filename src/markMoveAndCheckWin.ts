import { Diagonal } from "./constants.js";
import type { Board, Coord, Player } from "./types";

type IsMoveOnDiagMainParam = {
  move: Coord;
};

const isMoveOnDiagMain = ({ move }: IsMoveOnDiagMainParam) => {
  return move.row === move.col;
};

type IsMoveOnDiagAntiParam = {
  move: Coord;
  board: Board;
};

const isMoveOnDiagAnti = ({ move, board }: IsMoveOnDiagAntiParam) => {
  return move.row + move.col === board.size - 1;
};

type UpdateStatsAndCheckWinParam = {
  board: Board;
  move: Coord;
  player: Player;
};

const updateStatsAndCheckWin = ({
  board,
  move,
  player,
}: UpdateStatsAndCheckWinParam) => {
  const row = board.stats[player].row[move.row];
  row.sum += 1;
  if (row.sum === board.size) return true;

  const col = board.stats[player].col[move.col];
  col.sum += 1;
  if (col.sum === board.size) return true;

  if (isMoveOnDiagMain({ move })) {
    const diagMain = board.stats[player].diag[Diagonal.Main];
    diagMain.sum += 1;
    if (diagMain.sum === board.size) return true;
  }

  if (isMoveOnDiagAnti({ move, board })) {
    const diagAnti = board.stats[player].diag[Diagonal.Anti];
    diagAnti.sum += 1;
    if (diagAnti.sum === board.size) return true;
  }

  return false;
};

type MarkWinnerParam = {
  board: Board;
  player: Player;
};

const markWinner = ({ board, player }: MarkWinnerParam) => {
  board.status = player === "X" ? "XWon" : "OWon";
};

type MarkMoveAndCheckWinParam = {
  board: Board;
  move: Coord;
  player: Player;
};

const markMoveAndCheckWin = ({
  board,
  move,
  player,
}: MarkMoveAndCheckWinParam) => {
  board.cells[move.row][move.col] = player;

  if (updateStatsAndCheckWin({ move, player, board })) {
    markWinner({ board, player });
  }
};

export { markMoveAndCheckWin };
