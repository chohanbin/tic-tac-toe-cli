type Note = {
  message: string;
  id: number;
}

const note: Note = {
  message: "Hello World!",
  id: 123
}

console.log(`a note ${note.id} says ${note.message}`);
