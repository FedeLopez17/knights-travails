import allowedMoves from "./allowed-moves.js";
import Node from "./node.js";
import Queue from "./queue.js";

function knightMoves(queue, target) {
  if (!(queue instanceof Queue)) {
    const startingPoint = queue;
    queue = new Queue();
    const queueObject = { position: startingPoint, parent: null };
    queue.enqueue(queueObject);
  }

  const currentQueueElement = queue.dequeue();
  const currentPosition = currentQueueElement.position;
  const currentParent = currentQueueElement.parent;
  const currentNode = new Node(currentPosition, currentParent);

  // Base case: target position has been found
  if (currentPosition.x === target.x && currentPosition.y === target.y) {
    return currentNode.path.concat(currentPosition);
  }

  // Recursive case
  const isUnvisited = (position) => {
    return !JSON.stringify(currentNode.path).includes(JSON.stringify(position));
  };

  const potentialMoves = allowedMoves(currentPosition).filter(isUnvisited);

  potentialMoves.forEach((move) => {
    queue.enqueue({ position: move, parent: currentNode });
  });

  return knightMoves(queue, target);
}

// Tests:

console.log("knightMoves({ x: 3, y: 3 }, { x: 4, y: 3 })");
console.log("expected outcome: ");
console.log("[{x: 3, y: 3}, {x: 4, y: 5}, {x: 2, y: 4}, {x: 4, y: 3}]");
console.log("outcome:");
console.log(JSON.stringify(knightMoves({ x: 3, y: 3 }, { x: 4, y: 3 })));
console.log("");

console.log("knightMoves({ x: 0, y: 0 }, { x: 1, y: 2 })");
console.log("expected outcome:");
console.log("[{x: 0, y: 0}, {x: 1, y: 2}]");
console.log("outcome:");
console.log(JSON.stringify(knightMoves({ x: 0, y: 0 }, { x: 1, y: 2 })));
console.log("");

console.log("knightMoves({ x: 3, y: 3 }, { x: 7, y: 6 })");
console.log("expected outcome:");
console.log("[{x: 3, y: 3}, {x: 4, y: 5}, {x: 5, y: 7}, {x: 7, y: 6}]");
console.log("outcome:");
console.log(JSON.stringify(knightMoves({ x: 3, y: 3 }, { x: 7, y: 6 })));
console.log("");

console.log("knightMoves({ x: 0, y: 0 }, { x: 7, y: 7 })");
console.log("expected outcome:");
console.log(
  "[{x: 0, y: 0}, {x: 1, y: 2}, {x: 0, y: 4}, {x: 1, y: 6}, {x: 3, y: 7}, {x: 5, y: 6}, {x: 7, y: 7}]"
);
console.log("outcome:");
console.log(JSON.stringify(knightMoves({ x: 0, y: 0 }, { x: 7, y: 7 })));
