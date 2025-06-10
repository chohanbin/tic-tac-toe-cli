import { announceRoundResult } from "./announceRoundResult.js";
import { createBoard } from "./createBoard.js";
import { markMoveAndCheckWin } from "./markMoveAndCheckWin.js";
import { otherPlayer } from "./otherPlayer.js";
import { printBoard } from "./printBoard.js";
import { prompt } from "./prompt.js";
import type { Coord, Player, Score } from "./types.js";
import { validateMoveInput } from "./validateMoveInput.js";

console.log("Welcome to Tic Tac Toe!");

const boardSize = 3;
const indexOffset = 1;
const score: Score = { X: 0, O: 0 };
let roundCount = 0;
let currentPlayer: Player = "X";

while (true) {
  roundCount += 1;
  console.log(`\nRound ${roundCount}!`);

  // Reset board
  const board = createBoard({ size: boardSize, indexOffset });
  const maxTurn = board.size * board.size;
  let turnCount = 1;

  while (true) {
    printBoard({ board });

    if (turnCount > maxTurn && board.status === "NotOver") {
      board.status = "Draw";
    }

    if (board.status !== "NotOver") {
      break;
    }

    console.log(`Turn: ${turnCount}\n`);

    // Ask for the next move.
    while (true) {
      const input = await prompt.question(
        `Player ${currentPlayer}, make a move!\n`,
      );

      const { valid, move, error } = validateMoveInput({ input, board });

      if (valid) {
        markMoveAndCheckWin({
          move: move as Coord,
          player: currentPlayer,
          board,
        });
        currentPlayer = otherPlayer({ currentPlayer });
        break;
      }

      console.log(error);
    }

    turnCount += 1;
  }

  announceRoundResult({ score, status: board.status });

  const answer = await prompt.question("Play again? ('yes')\n");

  if (answer.trim() === "yes") {
    if (board.status === "XWon") {
      currentPlayer = "X";
    } else if (board.status === "OWon") {
      currentPlayer = "O";
    }
  } else {
    break;
  }
}

console.log("Goodbye!");
process.exit();
