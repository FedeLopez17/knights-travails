const KNIGHT_MOVES = [
  { x: -1, y: 2 },
  { x: 1, y: 2 },
  { x: -1, y: -2 },
  { x: 1, y: -2 },
  { x: -2, y: 1 },
  { x: -2, y: -1 },
  { x: 2, y: 1 },
  { x: 2, y: -1 },
];

export default function allowedMoves({ x, y }) {
  const allowedMoves = [];

  KNIGHT_MOVES.forEach((move) => {
    const potentialMoveX = x + move.x;
    const potentialMoveY = y + move.y;
    if (
      potentialMoveX < 8 &&
      potentialMoveX > -1 &&
      potentialMoveY < 8 &&
      potentialMoveY > -1
    ) {
      allowedMoves.push({ x: potentialMoveX, y: potentialMoveY });
    }
  });

  return allowedMoves;
}
