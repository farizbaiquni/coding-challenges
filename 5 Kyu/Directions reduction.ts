// link = https://www.codewars.com/kata/550f22f4d758534c1100025a

const getOppositeDirection = (direction: string) => {
  switch (direction) {
    case "NORTH":
      return "SOUTH";

    case "SOUTH":
      return "NORTH";

    case "EAST":
      return "WEST";

    case "WEST":
      return "EAST";

    default:
      return direction;
  }
};

export function dirReduc(arr: string[]): string[] {
  const stack: string[] = [];

  for (let i = 0; i < arr.length; i++) {
    const oppsiteDirection = getOppositeDirection(arr[i]);

    if (stack.length > 0 && stack[stack.length - 1] === oppsiteDirection) {
      stack.pop();
    } else {
      stack.push(arr[i]);
    }
  }

  return stack;
}

console.log(dirReduc(["NORTH", "EAST", "WEST", "SOUTH", "WEST", "WEST"]));
