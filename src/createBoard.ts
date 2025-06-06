import type { Board } from "./types";

type Param = {
  size: number;
  indexOffset: number;
};

const createBoard = ({ size, indexOffset }: Param): Board => {
  const cells = Array.from({ length: size }, () => Array(size).fill(null));

  return {
    size,
    cells,
    status: "NotOver",
    indexOffset,
  };
};

export { createBoard };
