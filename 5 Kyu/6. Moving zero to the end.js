// link : https://www.codewars.com/kata/52597aa56021e91c93000cb0

function moveZeros(arr) {
  let firstPartNonZeroArray = [];
  let secondPartZeroArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      secondPartZeroArray.push(0);
    } else {
      firstPartNonZeroArray.push(arr[i]);
    }
  }
  const result = [...firstPartNonZeroArray, ...secondPartZeroArray];
  return result;
}

console.log(moveZeros([1, 2, 0, 1, 0, 1, 0, 3, 0, 1]));
