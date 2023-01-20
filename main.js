/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/allowed-moves.js":
/*!******************************!*\
  !*** ./src/allowed-moves.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ allowedMoves)
/* harmony export */ });
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

function allowedMoves({ x, y }) {
  const allowedMoves = [];

  for (const move of MOVES) {
    if (move.condition(x, y)) allowedMoves.push(move.coordinates(x, y));
  }

  return allowedMoves;
}


/***/ }),

/***/ "./src/node.js":
/*!*********************!*\
  !*** ./src/node.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Node)
/* harmony export */ });
class Node {
  constructor(position, parent) {
    this.position = position;
    this.parent = parent;
    this.path = this.getPath();
  }

  getPath() {
    const path = [];
    let parent = this.parent;
    while (parent) {
      path.unshift(parent.position);
      parent = parent.parent;
    }
    return path;
  }
}


/***/ }),

/***/ "./src/queue.js":
/*!**********************!*\
  !*** ./src/queue.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Queue)
/* harmony export */ });
class Queue {
  queue = [];

  enqueue(value) {
    this.queue.push(value);
    return this.queue;
  }

  dequeue() {
    return this.queue.shift();
  }
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*********************************!*\
  !*** ./src/knights-travails.js ***!
  \*********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _allowed_moves_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./allowed-moves.js */ "./src/allowed-moves.js");
/* harmony import */ var _node_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node.js */ "./src/node.js");
/* harmony import */ var _queue_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./queue.js */ "./src/queue.js");




function knightMoves(queue, target) {
  if (!(queue instanceof _queue_js__WEBPACK_IMPORTED_MODULE_2__["default"])) {
    const startingPoint = queue;
    queue = new _queue_js__WEBPACK_IMPORTED_MODULE_2__["default"]();
    const queueObject = { position: startingPoint, parent: null };
    queue.enqueue(queueObject);
  }

  const currentQueueElement = queue.dequeue();
  const currentPosition = currentQueueElement.position;
  const currentParent = currentQueueElement.parent;
  const currentNode = new _node_js__WEBPACK_IMPORTED_MODULE_1__["default"](currentPosition, currentParent);

  // Base case: target position has been found
  if (currentPosition.x === target.x && currentPosition.y === target.y) {
    return currentNode.path.concat(currentPosition);
  }

  // Recursive case
  const isUnvisited = (position) => {
    return !JSON.stringify(currentNode.path).includes(JSON.stringify(position));
  };

  const potentialMoves = (0,_allowed_moves_js__WEBPACK_IMPORTED_MODULE_0__["default"])(currentPosition).filter(isUnvisited);

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

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LElBQUksWUFBWTtBQUNyRTs7QUFFQSwyQkFBMkIsWUFBWSxJQUFJLFlBQVk7QUFDdkQ7QUFDQTtBQUNBLEtBQUssV0FBVyxHQUFHLFdBQVcsR0FBRyxXQUFXLEdBQUcsV0FBVyxHQUFHLFdBQVcsR0FBRyxXQUFXLEdBQUcsV0FBVztBQUNwRztBQUNBO0FBQ0EseUNBQXlDLFlBQVksSUFBSSxZQUFZIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8va25pZ2h0cy10cmF2YWlscy8uL3NyYy9hbGxvd2VkLW1vdmVzLmpzIiwid2VicGFjazovL2tuaWdodHMtdHJhdmFpbHMvLi9zcmMvbm9kZS5qcyIsIndlYnBhY2s6Ly9rbmlnaHRzLXRyYXZhaWxzLy4vc3JjL3F1ZXVlLmpzIiwid2VicGFjazovL2tuaWdodHMtdHJhdmFpbHMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8va25pZ2h0cy10cmF2YWlscy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8va25pZ2h0cy10cmF2YWlscy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2tuaWdodHMtdHJhdmFpbHMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9rbmlnaHRzLXRyYXZhaWxzLy4vc3JjL2tuaWdodHMtdHJhdmFpbHMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgTU9WRV9DT05ESVRJT05TID0ge1xuICB0d29VcCh5KSB7XG4gICAgcmV0dXJuIHkgPD0gNTtcbiAgfSxcblxuICB0d29Eb3duKHkpIHtcbiAgICByZXR1cm4geSA+PSAyO1xuICB9LFxuXG4gIHR3b0xlZnQoeCkge1xuICAgIHJldHVybiB4ID49IDI7XG4gIH0sXG5cbiAgdHdvUmlnaHQoeCkge1xuICAgIHJldHVybiB4IDw9IDU7XG4gIH0sXG5cbiAgb25lVXAoeSkge1xuICAgIHJldHVybiB5ICE9PSA3O1xuICB9LFxuXG4gIG9uZURvd24oeSkge1xuICAgIHJldHVybiB5ICE9PSAwO1xuICB9LFxuXG4gIG9uZUxlZnQoeCkge1xuICAgIHJldHVybiB4ICE9PSAwO1xuICB9LFxuXG4gIG9uZVJpZ2h0KHgpIHtcbiAgICByZXR1cm4geCAhPT0gNztcbiAgfSxcbn07XG5cbmNvbnN0IE1PVkVTID0gW1xuICB7XG4gICAgLy8gdG9wIGxlZnRcbiAgICBjb25kaXRpb246ICh4LCB5KSA9PiB7XG4gICAgICByZXR1cm4gTU9WRV9DT05ESVRJT05TLm9uZUxlZnQoeCkgJiYgTU9WRV9DT05ESVRJT05TLnR3b1VwKHkpO1xuICAgIH0sXG4gICAgY29vcmRpbmF0ZXM6ICh4LCB5KSA9PiB7XG4gICAgICByZXR1cm4geyB4OiB4IC0gMSwgeTogeSArIDIgfTtcbiAgICB9LFxuICB9LFxuXG4gIHtcbiAgICAvLyB0b3AgcmlnaHRcbiAgICBjb25kaXRpb246ICh4LCB5KSA9PiB7XG4gICAgICByZXR1cm4gTU9WRV9DT05ESVRJT05TLm9uZVJpZ2h0KHgpICYmIE1PVkVfQ09ORElUSU9OUy50d29VcCh5KTtcbiAgICB9LFxuICAgIGNvb3JkaW5hdGVzOiAoeCwgeSkgPT4ge1xuICAgICAgcmV0dXJuIHsgeDogeCArIDEsIHk6IHkgKyAyIH07XG4gICAgfSxcbiAgfSxcblxuICB7XG4gICAgLy8gYm90dG9tIGxlZnRcbiAgICBjb25kaXRpb246ICh4LCB5KSA9PiB7XG4gICAgICByZXR1cm4gTU9WRV9DT05ESVRJT05TLm9uZUxlZnQoeCkgJiYgTU9WRV9DT05ESVRJT05TLnR3b0Rvd24oeSk7XG4gICAgfSxcbiAgICBjb29yZGluYXRlczogKHgsIHkpID0+IHtcbiAgICAgIHJldHVybiB7IHg6IHggLSAxLCB5OiB5IC0gMiB9O1xuICAgIH0sXG4gIH0sXG5cbiAge1xuICAgIC8vIGJvdHRvbSByaWdodFxuICAgIGNvbmRpdGlvbjogKHgsIHkpID0+IHtcbiAgICAgIHJldHVybiBNT1ZFX0NPTkRJVElPTlMub25lUmlnaHQoeCkgJiYgTU9WRV9DT05ESVRJT05TLnR3b0Rvd24oeSk7XG4gICAgfSxcbiAgICBjb29yZGluYXRlczogKHgsIHkpID0+IHtcbiAgICAgIHJldHVybiB7IHg6IHggKyAxLCB5OiB5IC0gMiB9O1xuICAgIH0sXG4gIH0sXG5cbiAge1xuICAgIC8vIGxlZnQgdG9wXG4gICAgY29uZGl0aW9uOiAoeCwgeSkgPT4ge1xuICAgICAgcmV0dXJuIE1PVkVfQ09ORElUSU9OUy50d29MZWZ0KHgpICYmIE1PVkVfQ09ORElUSU9OUy5vbmVVcCh5KTtcbiAgICB9LFxuICAgIGNvb3JkaW5hdGVzOiAoeCwgeSkgPT4ge1xuICAgICAgcmV0dXJuIHsgeDogeCAtIDIsIHk6IHkgKyAxIH07XG4gICAgfSxcbiAgfSxcblxuICB7XG4gICAgLy8gbGVmdCBib3R0b21cbiAgICBjb25kaXRpb246ICh4LCB5KSA9PiB7XG4gICAgICByZXR1cm4gTU9WRV9DT05ESVRJT05TLnR3b0xlZnQoeCkgJiYgTU9WRV9DT05ESVRJT05TLm9uZURvd24oeSk7XG4gICAgfSxcbiAgICBjb29yZGluYXRlczogKHgsIHkpID0+IHtcbiAgICAgIHJldHVybiB7IHg6IHggLSAyLCB5OiB5IC0gMSB9O1xuICAgIH0sXG4gIH0sXG5cbiAge1xuICAgIC8vIHJpZ2h0IHRvcFxuICAgIGNvbmRpdGlvbjogKHgsIHkpID0+IHtcbiAgICAgIHJldHVybiBNT1ZFX0NPTkRJVElPTlMudHdvUmlnaHQoeCkgJiYgTU9WRV9DT05ESVRJT05TLm9uZVVwKHkpO1xuICAgIH0sXG4gICAgY29vcmRpbmF0ZXM6ICh4LCB5KSA9PiB7XG4gICAgICByZXR1cm4geyB4OiB4ICsgMiwgeTogeSArIDEgfTtcbiAgICB9LFxuICB9LFxuXG4gIHtcbiAgICAvLyByaWdodCBib3R0b21cbiAgICBjb25kaXRpb246ICh4LCB5KSA9PiB7XG4gICAgICByZXR1cm4gTU9WRV9DT05ESVRJT05TLnR3b1JpZ2h0KHgpICYmIE1PVkVfQ09ORElUSU9OUy5vbmVEb3duKHkpO1xuICAgIH0sXG4gICAgY29vcmRpbmF0ZXM6ICh4LCB5KSA9PiB7XG4gICAgICByZXR1cm4geyB4OiB4ICsgMiwgeTogeSAtIDEgfTtcbiAgICB9LFxuICB9LFxuXTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWxsb3dlZE1vdmVzKHsgeCwgeSB9KSB7XG4gIGNvbnN0IGFsbG93ZWRNb3ZlcyA9IFtdO1xuXG4gIGZvciAoY29uc3QgbW92ZSBvZiBNT1ZFUykge1xuICAgIGlmIChtb3ZlLmNvbmRpdGlvbih4LCB5KSkgYWxsb3dlZE1vdmVzLnB1c2gobW92ZS5jb29yZGluYXRlcyh4LCB5KSk7XG4gIH1cblxuICByZXR1cm4gYWxsb3dlZE1vdmVzO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgTm9kZSB7XG4gIGNvbnN0cnVjdG9yKHBvc2l0aW9uLCBwYXJlbnQpIHtcbiAgICB0aGlzLnBvc2l0aW9uID0gcG9zaXRpb247XG4gICAgdGhpcy5wYXJlbnQgPSBwYXJlbnQ7XG4gICAgdGhpcy5wYXRoID0gdGhpcy5nZXRQYXRoKCk7XG4gIH1cblxuICBnZXRQYXRoKCkge1xuICAgIGNvbnN0IHBhdGggPSBbXTtcbiAgICBsZXQgcGFyZW50ID0gdGhpcy5wYXJlbnQ7XG4gICAgd2hpbGUgKHBhcmVudCkge1xuICAgICAgcGF0aC51bnNoaWZ0KHBhcmVudC5wb3NpdGlvbik7XG4gICAgICBwYXJlbnQgPSBwYXJlbnQucGFyZW50O1xuICAgIH1cbiAgICByZXR1cm4gcGF0aDtcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUXVldWUge1xuICBxdWV1ZSA9IFtdO1xuXG4gIGVucXVldWUodmFsdWUpIHtcbiAgICB0aGlzLnF1ZXVlLnB1c2godmFsdWUpO1xuICAgIHJldHVybiB0aGlzLnF1ZXVlO1xuICB9XG5cbiAgZGVxdWV1ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5xdWV1ZS5zaGlmdCgpO1xuICB9XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBhbGxvd2VkTW92ZXMgZnJvbSBcIi4vYWxsb3dlZC1tb3Zlcy5qc1wiO1xuaW1wb3J0IE5vZGUgZnJvbSBcIi4vbm9kZS5qc1wiO1xuaW1wb3J0IFF1ZXVlIGZyb20gXCIuL3F1ZXVlLmpzXCI7XG5cbmZ1bmN0aW9uIGtuaWdodE1vdmVzKHF1ZXVlLCB0YXJnZXQpIHtcbiAgaWYgKCEocXVldWUgaW5zdGFuY2VvZiBRdWV1ZSkpIHtcbiAgICBjb25zdCBzdGFydGluZ1BvaW50ID0gcXVldWU7XG4gICAgcXVldWUgPSBuZXcgUXVldWUoKTtcbiAgICBjb25zdCBxdWV1ZU9iamVjdCA9IHsgcG9zaXRpb246IHN0YXJ0aW5nUG9pbnQsIHBhcmVudDogbnVsbCB9O1xuICAgIHF1ZXVlLmVucXVldWUocXVldWVPYmplY3QpO1xuICB9XG5cbiAgY29uc3QgY3VycmVudFF1ZXVlRWxlbWVudCA9IHF1ZXVlLmRlcXVldWUoKTtcbiAgY29uc3QgY3VycmVudFBvc2l0aW9uID0gY3VycmVudFF1ZXVlRWxlbWVudC5wb3NpdGlvbjtcbiAgY29uc3QgY3VycmVudFBhcmVudCA9IGN1cnJlbnRRdWV1ZUVsZW1lbnQucGFyZW50O1xuICBjb25zdCBjdXJyZW50Tm9kZSA9IG5ldyBOb2RlKGN1cnJlbnRQb3NpdGlvbiwgY3VycmVudFBhcmVudCk7XG5cbiAgLy8gQmFzZSBjYXNlOiB0YXJnZXQgcG9zaXRpb24gaGFzIGJlZW4gZm91bmRcbiAgaWYgKGN1cnJlbnRQb3NpdGlvbi54ID09PSB0YXJnZXQueCAmJiBjdXJyZW50UG9zaXRpb24ueSA9PT0gdGFyZ2V0LnkpIHtcbiAgICByZXR1cm4gY3VycmVudE5vZGUucGF0aC5jb25jYXQoY3VycmVudFBvc2l0aW9uKTtcbiAgfVxuXG4gIC8vIFJlY3Vyc2l2ZSBjYXNlXG4gIGNvbnN0IGlzVW52aXNpdGVkID0gKHBvc2l0aW9uKSA9PiB7XG4gICAgcmV0dXJuICFKU09OLnN0cmluZ2lmeShjdXJyZW50Tm9kZS5wYXRoKS5pbmNsdWRlcyhKU09OLnN0cmluZ2lmeShwb3NpdGlvbikpO1xuICB9O1xuXG4gIGNvbnN0IHBvdGVudGlhbE1vdmVzID0gYWxsb3dlZE1vdmVzKGN1cnJlbnRQb3NpdGlvbikuZmlsdGVyKGlzVW52aXNpdGVkKTtcblxuICBwb3RlbnRpYWxNb3Zlcy5mb3JFYWNoKChtb3ZlKSA9PiB7XG4gICAgcXVldWUuZW5xdWV1ZSh7IHBvc2l0aW9uOiBtb3ZlLCBwYXJlbnQ6IGN1cnJlbnROb2RlIH0pO1xuICB9KTtcblxuICByZXR1cm4ga25pZ2h0TW92ZXMocXVldWUsIHRhcmdldCk7XG59XG5cbi8vIFRlc3RzOlxuXG5jb25zb2xlLmxvZyhcImtuaWdodE1vdmVzKHsgeDogMywgeTogMyB9LCB7IHg6IDQsIHk6IDMgfSlcIik7XG5jb25zb2xlLmxvZyhcImV4cGVjdGVkIG91dGNvbWU6IFwiKTtcbmNvbnNvbGUubG9nKFwiW3t4OiAzLCB5OiAzfSwge3g6IDQsIHk6IDV9LCB7eDogMiwgeTogNH0sIHt4OiA0LCB5OiAzfV1cIik7XG5jb25zb2xlLmxvZyhcIm91dGNvbWU6XCIpO1xuY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoa25pZ2h0TW92ZXMoeyB4OiAzLCB5OiAzIH0sIHsgeDogNCwgeTogMyB9KSkpO1xuY29uc29sZS5sb2coXCJcIik7XG5cbmNvbnNvbGUubG9nKFwia25pZ2h0TW92ZXMoeyB4OiAwLCB5OiAwIH0sIHsgeDogMSwgeTogMiB9KVwiKTtcbmNvbnNvbGUubG9nKFwiZXhwZWN0ZWQgb3V0Y29tZTpcIik7XG5jb25zb2xlLmxvZyhcIlt7eDogMCwgeTogMH0sIHt4OiAxLCB5OiAyfV1cIik7XG5jb25zb2xlLmxvZyhcIm91dGNvbWU6XCIpO1xuY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoa25pZ2h0TW92ZXMoeyB4OiAwLCB5OiAwIH0sIHsgeDogMSwgeTogMiB9KSkpO1xuY29uc29sZS5sb2coXCJcIik7XG5cbmNvbnNvbGUubG9nKFwia25pZ2h0TW92ZXMoeyB4OiAzLCB5OiAzIH0sIHsgeDogNywgeTogNiB9KVwiKTtcbmNvbnNvbGUubG9nKFwiZXhwZWN0ZWQgb3V0Y29tZTpcIik7XG5jb25zb2xlLmxvZyhcIlt7eDogMywgeTogM30sIHt4OiA0LCB5OiA1fSwge3g6IDUsIHk6IDd9LCB7eDogNywgeTogNn1dXCIpO1xuY29uc29sZS5sb2coXCJvdXRjb21lOlwiKTtcbmNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KGtuaWdodE1vdmVzKHsgeDogMywgeTogMyB9LCB7IHg6IDcsIHk6IDYgfSkpKTtcbmNvbnNvbGUubG9nKFwiXCIpO1xuXG5jb25zb2xlLmxvZyhcImtuaWdodE1vdmVzKHsgeDogMCwgeTogMCB9LCB7IHg6IDcsIHk6IDcgfSlcIik7XG5jb25zb2xlLmxvZyhcImV4cGVjdGVkIG91dGNvbWU6XCIpO1xuY29uc29sZS5sb2coXG4gIFwiW3t4OiAwLCB5OiAwfSwge3g6IDEsIHk6IDJ9LCB7eDogMCwgeTogNH0sIHt4OiAxLCB5OiA2fSwge3g6IDMsIHk6IDd9LCB7eDogNSwgeTogNn0sIHt4OiA3LCB5OiA3fV1cIlxuKTtcbmNvbnNvbGUubG9nKFwib3V0Y29tZTpcIik7XG5jb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShrbmlnaHRNb3Zlcyh7IHg6IDAsIHk6IDAgfSwgeyB4OiA3LCB5OiA3IH0pKSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=