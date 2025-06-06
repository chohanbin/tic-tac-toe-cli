import readlinePromises from "node:readline/promises";

const prompt = readlinePromises.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: "",
});

export default prompt;
