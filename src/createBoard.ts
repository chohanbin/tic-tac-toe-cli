import type { Board, Player, StatsPerPlayer } from "./types";

type InitSquareMatrixParam = {
  size: number;
};

const initSquareMatrix = ({ size }: InitSquareMatrixParam): null[][] => {
  return Array.from({ length: size }, () => Array(size).fill(null));
};

type InitStatsPerPlayerParam = {
  size: number;
};

const initStatsPerPlayer = ({
  size,
}: InitStatsPerPlayerParam): StatsPerPlayer => {
  const players: Player[] = ["X", "O"];

  return players.reduce((acc, player) => {
    const row = Array.from({ length: size }, () => ({ sum: 0 }));
    const col = Array.from({ length: size }, () => ({ sum: 0 }));
    // Only two diagonals can exist. Main- and anti- diagonals.
    const diag = Array.from({ length: 2 }, () => ({ sum: 0 }));

    acc[player] = { row, col, diag };
    return acc;
  }, {} as StatsPerPlayer);
};

type CreateBoardParam = {
  size: number;
  indexOffset: number;
};

const createBoard = ({ size, indexOffset }: CreateBoardParam): Board => {
  const cells = initSquareMatrix({ size });
  const stats = initStatsPerPlayer({ size });

  return {
    size,
    cells,
    status: "NotOver",
    indexOffset,
    stats,
  };
};

export { createBoard };
