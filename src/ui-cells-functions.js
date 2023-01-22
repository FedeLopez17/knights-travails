import knightImageSrc from "./images/knight.png";
import playChessPieceSound from "./sound-effects.js";

export function placeKnight(cell) {
  playChessPieceSound();
  const knight = document.createElement("img");
  knight.src = knightImageSrc;
  knight.id = "knight-piece";
  knight.alt = "Knight piece";
  cell.appendChild(knight);
  cell.id = "starting-position";
}

export function clearKnight() {
  const previousKnight = document.querySelector("img#knight-piece");
  if (previousKnight) previousKnight.remove();
  const previousStartingCell = document.querySelector("#starting-position");
  if (previousStartingCell) previousStartingCell.id = "";
  clearMoves();
}

export function setTarget(cell) {
  cell.id = "target";
}

export function clearTarget() {
  const previousTarget = document.querySelector(".cell#target");
  if (previousTarget) previousTarget.id = "";
  clearMoves();
}

export function clearMoves() {
  const moves = document.querySelectorAll(".move");
  moves.forEach((move) => {
    move.remove();
  });
}
