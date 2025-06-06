import { Table } from "console-table-printer";
import type { ColumnOptionsRaw } from "console-table-printer/dist/src/models/external-table.js";
import type { Board } from "./board.js";

type CreateColumnDefsParam = {
  board: Board;
};

const createColumnDefs = ({
  board,
}: CreateColumnDefsParam): ColumnOptionsRaw[] => {
  const colDefs: ColumnOptionsRaw[] = [{ name: "Board", alignment: "right" }];

  for (let i = 0; i < board.size; i++) {
    const displayIndex = (i + board.indexOffset).toString();
    colDefs.push({ name: displayIndex, alignment: "center" });
  }

  return colDefs;
};

type PopulateDisplayTableParam = {
  board: Board;
  table: Table;
};

const populateDisplayTable = ({ board, table }: PopulateDisplayTableParam) => {
  for (let rowIndex = 0; rowIndex < board.size; rowIndex++) {
    // Label the row with index.
    const displayRowIndex = (rowIndex + board.indexOffset).toString();
    const row: { [key: string]: string } = { Board: displayRowIndex };

    // Load the marking for each cell in a given row.
    for (let colIndex = 0; colIndex < board.size; colIndex++) {
      const displayColIndex = (colIndex + board.indexOffset).toString();
      row[displayColIndex] = board.cells[rowIndex][colIndex] ?? "";
    }
    table.addRow(row, { separator: true });
  }
};

type PrintBoardParam = {
  board: Board;
};

const printBoard = ({ board }: PrintBoardParam) => {
  const columns = createColumnDefs({ board });

  const displayTable = new Table({
    columns,
    // Show the row with the lowest index at the bottom.
    sort: (row1, row2) => row2.Board - row1.Board,
  });

  populateDisplayTable({ board, table: displayTable });

  displayTable.printTable();
};

export { printBoard };
