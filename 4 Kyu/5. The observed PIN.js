// link : https://www.codewars.com/kata/5263c6999e0f40dee200059d

function getPINs(pins) {
  let combinations = adjacentDigits[pins[0]];

  // Simpan seluruh adjacent digits dimulai dari index ke-1 / data ke-2 lalu simpan dalam array
  let allNextAdjacentDigits = pins
    .slice(1)
    .split("")
    .map((data) => adjacentDigits[data]);

  // for pertama intinya kita ingin melakukan loop pada allNextAdjacentDigits
  for (const nextPin of allNextAdjacentDigits) {
    let newCombinations = [];
    for (const combination of combinations) {
      for (const nextPinDigit of nextPin) {
        newCombinations.push(combination + nextPinDigit);
      }
    }
    combinations = newCombinations;
  }
  return combinations;
}

const adjacentDigits = {
  0: ["0", "8"],
  1: ["1", "2", "4"],
  2: ["1", "2", "3", "5"],
  3: ["2", "3", "6"],
  4: ["1", "4", "5", "7"],
  5: ["2", "4", "5", "6", "8"],
  6: ["3", "5", "6", "9"],
  7: ["4", "7", "8"],
  8: ["5", "7", "8", "9", "0"],
  9: ["6", "8", "9"],
};

console.log(getPINs("369"));
