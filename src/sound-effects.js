import chessPieceSoundFile from "./audio/chess-piece-sound.mp3";

const chessPieceSound = new Audio(chessPieceSoundFile);
chessPieceSound.preload = "auto";

function soundOn() {
  const volumeOn = document.querySelector("#volume-toggle[data-volume='true']");
  return volumeOn ? true : false;
}

export default function playChessPieceSound() {
  if (soundOn()) chessPieceSound.play();
}
