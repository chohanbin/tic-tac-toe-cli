import type { Player } from "./types";

type Param = {
  currentPlayer: Player;
};

const otherPlayer = ({ currentPlayer }: Param) => {
  return currentPlayer === "X" ? "O" : "X";
};

export { otherPlayer };
