// link = https://www.codewars.com/kata/54ff3102c1bad923760001f3
export class Kata {
  static getCount(str: string): number {
    let totalVowel = 0;
    str = str.trim();
    str = str.toLowerCase();
    for (let i = 0; i < str.length; i++) {
      if (
        str[i] === "a" ||
        str[i] === "i" ||
        str[i] === "u" ||
        str[i] === "e" ||
        str[i] === "o"
      ) {
        totalVowel++;
      }
    }
    return totalVowel;
  }
}

console.log(Kata.getCount("olahraga"));
