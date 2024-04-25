export class Kata {
  static disemvowel(str: string): string {
    let result = "";
    const res = Array.from(str)
      .filter(
        (value, index, array) =>
          !["a", "i", "u", "e", "o"].includes(value.toLowerCase())
      )
      .join("");
    return res;
  }
}

console.log(Kata.disemvowel("This website is for losers LOL!"));
