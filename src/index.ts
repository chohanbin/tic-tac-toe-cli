import prompt from "./prompt.js";

console.log("Welcome to Tic Tac Toe!");

let roundCount = 0;

while (true) {
  roundCount += 1;

  console.log(`Round ${roundCount}!`);

  const maxTurn = 3;
  let turnCount = 0;

  do {
    turnCount += 1;

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
