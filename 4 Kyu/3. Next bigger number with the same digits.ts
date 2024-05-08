// link : https://www.codewars.com/kata/55983863da40caa2c900004e

export function nextBigger(numbers: number): number {
  let result = 0;
  const arrayNumber = numbers.toString().split("").map(Number);
  if (arrayNumber.length <= 1) {
    return -1;
  }
  let nextLarger: undefined | number = undefined;
  let entryPoint: number = 0;
  let indexNextLarger: number = 0;
  let indexEntryPoint: number = 0;
  for (let i = arrayNumber.length - 2; i >= 0; i--) {
    for (let j = i + 1; j < arrayNumber.length; j++) {
      indexEntryPoint = i;
      entryPoint = arrayNumber[i];
      if (nextLarger === undefined) {
        if (arrayNumber[j] > arrayNumber[i]) {
          nextLarger = arrayNumber[j];
          indexNextLarger = j;
        }
      } else if (
        arrayNumber[j] > arrayNumber[i] &&
        arrayNumber[j] < nextLarger
      ) {
        nextLarger = arrayNumber[j];
        indexNextLarger = j;
      }
      if (nextLarger !== undefined && j === arrayNumber.length - 1) {
        i = -1;
      }
    } // end for
  } // end for

  if (nextLarger !== undefined) {
    const firstPart: number[] = arrayNumber.slice(0, indexEntryPoint);
    firstPart.push(arrayNumber[indexNextLarger]);
    arrayNumber[indexNextLarger] = entryPoint;
    const secondPart: number[] = arrayNumber.splice(
      indexEntryPoint + 1,
      arrayNumber.length
    );
    secondPart.sort();
    const arrayResult = [...firstPart, ...secondPart];
    result = parseInt(arrayResult.join(""));
  } else {
    return -1;
  }
  return result;
}

console.log(nextBigger(737551));
