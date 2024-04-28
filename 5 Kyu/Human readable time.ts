// link = https://www.codewars.com/kata/52685f7382004e774f0001f7

export function humanReadable(seconds: number): string {
  let result: string = "";

  let resultHour: number = 0;
  let resultMinute: number = 0;
  let resultSecond: number = 0;

  const totalSecondInAMinute: number = 60; // 60 seconds
  const totalSecondInAHour: number = 60 * 60; // 3600 seconds

  resultHour = Math.floor(seconds / totalSecondInAHour);

  seconds = seconds - resultHour * totalSecondInAHour;

  resultMinute = Math.floor(seconds / totalSecondInAMinute);

  seconds = seconds - resultMinute * totalSecondInAMinute;

  resultSecond = seconds;

  result = `${resultHour > 9 ? resultHour : "0" + resultHour}:${
    resultMinute > 9 ? resultMinute : "0" + resultMinute
  }:${resultSecond > 9 ? resultSecond : "0" + resultSecond}`;

  return result;
}

console.log(humanReadable(86399));
