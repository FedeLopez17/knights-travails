const MOVE_CONDITIONS = {
  twoUp(y) {
    return y <= 5;
  },

  twoDown(y) {
    return y >= 2;
  },

  twoLeft(x) {
    return x >= 2;
  },

  twoRight(x) {
    return x <= 5;
  },

  oneUp(y) {
    return y !== 7;
  },

  oneDown(y) {
    return y !== 0;
  },

  oneLeft(x) {
    return x !== 0;
  },

  oneRight(x) {
    return x !== 7;
  },
};

const MOVES = [
  {
    // top left
    condition: (x, y) => {
      return MOVE_CONDITIONS.oneLeft(x) && MOVE_CONDITIONS.twoUp(y);
    },
    coordinates: (x, y) => {
      return { x: x - 1, y: y + 2 };
    },
  },

  {
    // top right
    condition: (x, y) => {
      return MOVE_CONDITIONS.oneRight(x) && MOVE_CONDITIONS.twoUp(y);
    },
    coordinates: (x, y) => {
      return { x: x + 1, y: y + 2 };
    },
  },

  {
    // bottom left
    condition: (x, y) => {
      return MOVE_CONDITIONS.oneLeft(x) && MOVE_CONDITIONS.twoDown(y);
    },
    coordinates: (x, y) => {
      return { x: x - 1, y: y - 2 };
    },
  },

  {
    // bottom right
    condition: (x, y) => {
      return MOVE_CONDITIONS.oneRight(x) && MOVE_CONDITIONS.twoDown(y);
    },
    coordinates: (x, y) => {
      return { x: x + 1, y: y - 2 };
    },
  },

  {
    // left top
    condition: (x, y) => {
      return MOVE_CONDITIONS.twoLeft(x) && MOVE_CONDITIONS.oneUp(y);
    },
    coordinates: (x, y) => {
      return { x: x - 2, y: y + 1 };
    },
  },

  {
    // left bottom
    condition: (x, y) => {
      return MOVE_CONDITIONS.twoLeft(x) && MOVE_CONDITIONS.oneDown(y);
    },
    coordinates: (x, y) => {
      return { x: x - 2, y: y - 1 };
    },
  },

  {
    // right top
    condition: (x, y) => {
      return MOVE_CONDITIONS.twoRight(x) && MOVE_CONDITIONS.oneUp(y);
    },
    coordinates: (x, y) => {
      return { x: x + 2, y: y + 1 };
    },
  },

  {
    // right bottom
    condition: (x, y) => {
      return MOVE_CONDITIONS.twoRight(x) && MOVE_CONDITIONS.oneDown(y);
    },
    coordinates: (x, y) => {
      return { x: x + 2, y: y - 1 };
    },
  },
];

export default function allowedMoves({ x, y }) {
  const allowedMoves = [];

  for (const move of MOVES) {
    if (move.condition(x, y)) allowedMoves.push(move.coordinates(x, y));
  }

  return allowedMoves;
}
