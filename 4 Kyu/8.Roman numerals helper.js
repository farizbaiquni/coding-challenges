// link = https://www.codewars.com/kata/51b66044bce5799a7f000003
class RomanNumerals {
  static romanToInteger = new Map([
    ["M", 1000],
    ["CM", 900],
    ["D", 500],
    ["CD", 400],
    ["C", 100],
    ["XC", 90],
    ["L", 50],
    ["XL", 40],
    ["X", 10],
    ["IX", 9],
    ["V", 5],
    ["IV", 4],
    ["I", 1],
  ]);

  static toRoman(num) {
    let result = "";
    let remains = num;
    for (let [key, value] of RomanNumerals.romanToInteger) {
      if (remains >= value) {
        const dividedBy = Math.floor(remains / value);
        const symbols = key.repeat(dividedBy);
        result += symbols;
        remains = remains % value;
      }
    }
    return result;
  }

  static fromRoman(str) {
    let result = 0;
    let prevInt = 0;
    for (let i = str.length - 1; i >= 0; i--) {
      if (prevInt === 0) {
        prevInt = RomanNumerals.romanToInteger.get(str[i]);
        result += prevInt;
      } else {
        const currentValue = RomanNumerals.romanToInteger.get(str[i]);
        if (currentValue >= prevInt) {
          result += currentValue;
        } else {
          result -= currentValue;
        }
        prevInt = currentValue;
      }
    }
    return result;
  }
}
console.log(RomanNumerals.toRoman(1200));
console.log(RomanNumerals.fromRoman("MCDLIII"));
