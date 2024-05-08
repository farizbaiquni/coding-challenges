// link : https://www.codewars.com/kata/51c8e37cee245da6b40000bd

function solution(text, markers) {
  const arrayMultipleTextLine = text.split("\n");
  for (let i = 0; i < arrayMultipleTextLine.length; i++) {
    const oneLineText = arrayMultipleTextLine[i];
    let cleanOneLineText = "";
    let space = "";
    for (let j = 0; j < oneLineText.length; j++) {
      if (oneLineText[j] === " ") {
        space += " ";
      } else {
        if (markers.includes(oneLineText[j])) {
          break;
        } else {
          cleanOneLineText += `${space}${oneLineText[j]}`;
          space = "";
        }
      }
    }
    arrayMultipleTextLine[i] = cleanOneLineText;
  }
  const result = arrayMultipleTextLine.join("\n");
  return result;
}

console.log(solution("aa bb\nca # cc", ["#"]));
