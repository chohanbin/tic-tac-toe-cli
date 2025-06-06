import type { Board } from "./board.js";

type Param = {
  size: number;
  indexOffset: number;
};

const createBoard = ({ size, indexOffset }: Param): Board => {
  const cells = Array.from({ length: size }, () => Array(size).fill(null));

  return {
    size,
    cells,
    indexOffset,
  };
};

export { createBoard };
