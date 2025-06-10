type Player = "X" | "O";

type Cell = Player | null;

type Coord = {
  row: number;
  col: number;
};

type Status = "XWon" | "OWon" | "Draw" | "NotOver";

type Stats = {
  sum: number;
};

type StatsPerLine = {
  row: Stats[];
  col: Stats[];
  diag: Stats[];
};

type StatsPerPlayer = {
  [key in Player]: StatsPerLine;
};

type Score = {
  [key in Player]: number;
};

type Board = {
  size: number;
  cells: Cell[][];
  status: Status;
  indexOffset: number;
  stats: StatsPerPlayer;
};

export type { Board, Coord, Score, Status, StatsPerPlayer, Player };
