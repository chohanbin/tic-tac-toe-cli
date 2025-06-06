type Player = "X" | "O";

type Cell = Player | null;

type Status = "XWon" | "OWon" | "Draw" | "NotOver";

type Board = {
  size: number;
  cells: Cell[][];
  status: Status;
  indexOffset: number;
};

type Coord = {
  row: number;
  col: number;
};

export type { Board, Coord, Player };
