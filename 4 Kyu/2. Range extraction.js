// link : https://www.codewars.com/kata/51ba717bb08c1cd60f00002f

function solution(list) {
  let result = "";
  let range = 0;
  let startPoint = 0;
  for (let i = 0; i < list.length; i++) {
    if (range === 0) {
      startPoint = list[i];
    }

    if (i + 1 === list.length - 1) {
      if (list[i] + 1 === list[i + 1]) {
        range++;
        if (range >= 2) {
          result += `${startPoint}-${list[i + 1]}`;
        } else if (range === 1) {
          result += `${list[i]},${list[i + 1]}`;
        }
      } else {
        if (range >= 2) {
          result += `${startPoint}-${list[i]},${list[i + 1]}`;
        } else if (range === 1) {
          result += `${list[i - 1]},${list[i]},${list[i + 1]}`;
        } else {
          result += `${list[i]},${list[i + 1]}`;
        }
      }
      i++;
    } else {
      if (list[i] + 1 === list[i + 1]) {
        range++;
      } else {
        if (range >= 2) {
          result += `${startPoint}-${list[i]},`;
        } else if (range === 1) {
          result += `${list[i - 1]},${list[i]},`;
        } else {
          result += `${list[i]},`;
        }
        range = 0;
      }
    }
  }
  return result;
}

console.log(solution([-21, -18, -17, -14, -11, -10, -7]));
