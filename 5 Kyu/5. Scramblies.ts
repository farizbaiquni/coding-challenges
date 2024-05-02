// link : https://www.codewars.com/kata/55c04b4cc56a697bb0000048

export function scramble(scrambleWord: string, word: string): boolean {
  let scrambleMap: Map<string, number> = new Map();
  for (let i = 0; i < scrambleWord.length; i++) {
    const totalWord: number | undefined = scrambleMap.get(scrambleWord[i]);
    scrambleMap.set(
      scrambleWord[i],
      totalWord === undefined ? 1 : totalWord + 1
    );
  }
  for (const char of word) {
    const totalWord = scrambleMap.get(char);
    if (totalWord === undefined || totalWord === 0) {
      return false;
    } else {
      scrambleMap.set(char, totalWord - 1);
    }
  }
  return true;
}

console.log(scramble("rkqodlw", "world"));
