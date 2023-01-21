import "./style.css";
import knightMoves from "./knights-travails.js";

// Build chess board:

const chessBoard = document.querySelector("#chess-board");

// Normal chess boards are 8x8
const CHESSBOARD_WIDTH = 8;
const CHESSBOARD_HEIGHT = 8;

const COLUMN_COLORS = { even: "white", odd: "black" };

for (let column = 0; column < CHESSBOARD_WIDTH; column++) {
  const columnSection = document.createElement("section");
  columnSection.classList.add("column");
  columnSection.id = column;
  for (let row = CHESSBOARD_HEIGHT - 1; row >= 0; row--) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    const cellColor = row % 2 === 0 ? COLUMN_COLORS.even : COLUMN_COLORS.odd;
    cell.classList.add(cellColor);
    cell.setAttribute("data-position", JSON.stringify({ x: column, y: row }));

    if (column === 0 && row === 0) {
      cell.id = "column-zero-row-zero";
    }

    if (column === 0) {
      const rowLabel = document.createElement("p");
      rowLabel.classList.add("row", "label");
      rowLabel.innerText = row + 1;
      cell.appendChild(rowLabel);
    }

    if (row === 0) {
      const columnLabel = document.createElement("p");
      columnLabel.classList.add("column", "label");
      // Here I add column and 97 to get the ascii code of the lower case letters starting from "a", which is how
      // columns are labeled in chess boards: https://www.asciitable.com/
      columnLabel.innerText = String.fromCharCode(column + 97);
      cell.appendChild(columnLabel);
    }

    columnSection.appendChild(cell);
  }
  chessBoard.appendChild(columnSection);
  // swap the colours
  let temporary = COLUMN_COLORS.even;
  COLUMN_COLORS.even = COLUMN_COLORS.odd;
  COLUMN_COLORS.odd = temporary;
}

// Build buttons:

const controls = document.querySelector("#controls");

const placeKnightButton = document.createElement("button");
placeKnightButton.id = "place-knight";
placeKnightButton.innerText = "Place Knight";
controls.appendChild(placeKnightButton);

const chooseTargetButton = document.createElement("button");
chooseTargetButton.id = "choose-target";
chooseTargetButton.innerText = "Choose target";
controls.appendChild(chooseTargetButton);

const traverseButton = document.createElement("button");
traverseButton.id = "traverse";
traverseButton.innerText = "Traverse";
controls.appendChild(traverseButton);

const clearButton = document.createElement("button");
clearButton.id = "clear";
clearButton.innerText = "Clear";
controls.appendChild(clearButton);
