type Cell = "X" | "O" | null;

type Board = {
  size: number;
  cells: Cell[][];
  indexOffset: number;
};

export type { Board };
