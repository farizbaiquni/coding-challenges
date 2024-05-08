// link : git

const snail = function (array) {
  let result = [];
  if (array.length === 0 || array[0].length === 0) {
    return result;
  }
  result.push(array[0][0]);

  let currentDirection = "RIGHT";
  let currentPosition = [0, 0];

  const arrayLength = array.length - 1;
  const subArrayLength = array[0].length - 1;

  let loopN = 1;
  let totalLoop = array.length * array[0].length;
  while (loopN < totalLoop) {
    if (currentDirection === "RIGHT") {
      if (currentPosition[1] < subArrayLength) {
        const rightPosition = [currentPosition[0], currentPosition[1] + 1];
        const rightValue = array[rightPosition[0]][rightPosition[1]];
        if (rightValue === null) {
          const nextDirection = changeDirection(currentDirection);
          currentDirection = nextDirection;
        } else {
          result.push(rightValue);
          const nextPosition = [rightPosition[0], rightPosition[1]];
          array[currentPosition[0]][currentPosition[1]] = null;
          currentPosition = nextPosition;
          loopN++;
        }
      } else {
        const nextDirection = changeDirection(currentDirection);
        currentDirection = nextDirection;
      }
    } else if (currentDirection === "LEFT") {
      if (currentPosition[1] > 0) {
        const leftPosition = [currentPosition[0], currentPosition[1] - 1];
        const leftValue = array[leftPosition[0]][leftPosition[1]];
        if (leftValue === null) {
          const nextDirection = changeDirection(currentDirection);
          currentDirection = nextDirection;
        } else {
          result.push(leftValue);
          const nextPosition = [leftPosition[0], leftPosition[1]];
          array[currentPosition[0]][currentPosition[1]] = null;
          currentPosition = nextPosition;
          loopN++;
        }
      } else {
        const nextDirection = changeDirection(currentDirection);
        currentDirection = nextDirection;
      }
    } else if (currentDirection === "TOP") {
      if (currentPosition[0] > 0) {
        const topPosition = [currentPosition[0] - 1, currentPosition[1]];
        const topValue = array[topPosition[0]][topPosition[1]];
        if (topValue === null) {
          const nextDirection = changeDirection(currentDirection);
          currentDirection = nextDirection;
        } else {
          result.push(topValue);
          const nextPosition = [topPosition[0], topPosition[1]];
          array[currentPosition[0]][currentPosition[1]] = null;
          currentPosition = nextPosition;
          loopN++;
        }
      } else {
        const nextDirection = changeDirection(currentDirection);
        currentDirection = nextDirection;
      }
    } else if (currentDirection === "DOWN") {
      if (currentPosition[0] < arrayLength) {
        const downPosition = [currentPosition[0] + 1, currentPosition[1]];
        const downValue = array[downPosition[0]][downPosition[1]];
        if (downValue === null) {
          const nextDirection = changeDirection(currentDirection);
          currentDirection = nextDirection;
        } else {
          result.push(downValue);
          const nextPosition = [downPosition[0], downPosition[1]];
          array[currentPosition[0]][currentPosition[1]] = null;
          currentPosition = nextPosition;
          loopN++;
        }
      } else {
        const nextDirection = changeDirection(currentDirection);
        currentDirection = nextDirection;
      }
    }
  } // end while
  return result;
}; // end function;

function changeDirection(currentDirection) {
  switch (currentDirection) {
    case "RIGHT":
      return "DOWN";

    case "DOWN":
      return "LEFT";

    case "LEFT":
      return "TOP";

    case "TOP":
      return "RIGHT";
  }
}

console.log(snail([[1]]));
