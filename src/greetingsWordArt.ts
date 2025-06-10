import figlet from "figlet";

const greetingsWordArt = figlet.textSync("Tic Tac Toe!", {
  font: "Larry 3D",
  horizontalLayout: "default",
  verticalLayout: "default",
  width: 100,
  whitespaceBreak: true,
});

export { greetingsWordArt };
