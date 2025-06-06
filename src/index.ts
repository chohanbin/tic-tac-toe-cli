import { createBoard } from "./createBoard.js";
import { printBoard } from "./printBoard.js";
import prompt from "./prompt.js";

console.log("Welcome to Tic Tac Toe!");

const boardSize = 3;
const indexOffset = 1;
let roundCount = 0;

while (true) {
  roundCount += 1;

  console.log(`Round ${roundCount}!`);

  const board = createBoard({ size: boardSize, indexOffset });
  const maxTurn = board.size * board.size;
  let turnCount = 0;

  do {
    turnCount += 1;

    printBoard({ board });

    console.log(`Turn: ${turnCount}`);

    const answer = await prompt.question("What is your next move?\n");

    console.log(`Move accepted: ${answer}`);
  } while (turnCount < maxTurn);

  const answer = await prompt.question(
    "Round finished. Play again? (say 'yes')\n",
  );

  if (answer.trim() !== "yes") {
    break;
  }
}

console.log("Goodbye!");
process.exit();
