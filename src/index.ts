import { createBoard } from "./createBoard.js";
import { markMove } from "./markMove.js";
import { otherPlayer } from "./otherPlayer.js";
import { printBoard } from "./printBoard.js";
import { prompt } from "./prompt.js";
import type { Coord, Player } from "./types.js";
import { validateMoveInput } from "./validateMoveInput.js";

console.log("Welcome to Tic Tac Toe!");

const boardSize = 3;
const indexOffset = 1;
let roundCount = 0;
let currentPlayer: Player = "X";

while (true) {
  roundCount += 1;
  console.log(`Round ${roundCount}!`);

  // Reset board
  const board = createBoard({ size: boardSize, indexOffset });
  const maxTurn = board.size * board.size;
  let turnCount = 0;

  do {
    console.log("\n");
    printBoard({ board });

    turnCount += 1;
    console.log(`Turn: ${turnCount}`);

    // Ask for the next move.
    while (true) {
      const input = await prompt.question(
        `Player ${currentPlayer}, make a move!\n`,
      );

      const { valid, move, error } = validateMoveInput({ input, board });

      if (valid) {
        markMove({ move: move as Coord, mover: currentPlayer, board });
        currentPlayer = otherPlayer({ currentPlayer });
        break;
      }

      console.log(error);
    }
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
