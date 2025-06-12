import type { Score, Status } from "./types";

type Param = {
  status: Status;
  score: Score;
};

const announceRoundResult = ({ status, score }: Param) => {
  if (status === "Draw") {
    console.log("😅  Draw!");
  } else if (status === "XWon") {
    score.X += 1;
    console.log("🎉  X won!");
  } else if (status === "OWon") {
    score.O += 1;
    console.log("🎊  O won!");
  } else {
    throw Error(`Unexpected round result status: ${status}`);
  }

  console.log(`\nScore 🏆  X: ${score.X}, O: ${score.O}\n`);
};

export { announceRoundResult };
