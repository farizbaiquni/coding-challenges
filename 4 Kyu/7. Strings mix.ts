// link = https://www.codewars.com/kata/5629db57620258aa9d000014

export const mix = (s1: string, s2: string): string => {
  let result: string = "";
  let s1CharTotalMap: Map<string, number> = new Map();
  let s2CharTotalMap: Map<string, number> = new Map();

  // kalkulasi s1
  for (const char of s1) {
    if (
      char.toUpperCase() !== char.toLowerCase() &&
      char !== char.toUpperCase()
    ) {
      const currentTotal = s1CharTotalMap.get(char);
      const sum = currentTotal === undefined ? 1 : currentTotal + 1;

      s1CharTotalMap.set(char, sum);
    }
  }

  // kalkulasi s2
  for (const char of s2) {
    if (
      char.toUpperCase() !== char.toLowerCase() &&
      char !== char.toUpperCase()
    ) {
      const currentTotal = s2CharTotalMap.get(char);
      const sum = currentTotal === undefined ? 1 : currentTotal + 1;

      s2CharTotalMap.set(char, sum);
    }
  }

  // Map untuk pemenang = keyChar - pemenang, contoh "A" -> 1:
  let winnerEachChar: Map<string, string> = new Map();

  let groupCharBasedTotal: Map<number, string[]> = new Map();

  let variationTotal: Set<number> = new Set();

  for (const char of s1CharTotalMap) {
    const s1CharTotal: number = s1CharTotalMap.get(char[0])!;
    const s2CharTotal: number =
      s2CharTotalMap.get(char[0]) === undefined
        ? 0
        : s2CharTotalMap.get(char[0])!;

    const largestTotal = s1CharTotal >= s2CharTotal ? s1CharTotal : s2CharTotal;
    if (largestTotal > 1) {
      const arrayOfCharGroupedByTotal = groupCharBasedTotal.get(largestTotal);
      if (arrayOfCharGroupedByTotal === undefined) {
        groupCharBasedTotal.set(largestTotal, [char[0]]);
      } else {
        const tempArray: string[] = groupCharBasedTotal.get(largestTotal)!;
        tempArray.push(char[0]);
        tempArray.sort();
        groupCharBasedTotal.set(largestTotal, tempArray);
      }
    }

    if (s1CharTotal > s2CharTotal) {
      if (s1CharTotal > 1) {
        winnerEachChar.set(char[0], "1:");
        variationTotal.add(s1CharTotal);
      }
    } else if (s2CharTotal > s1CharTotal) {
      if (s2CharTotal > 1) {
        winnerEachChar.set(char[0], "2:");
        variationTotal.add(s2CharTotal);
      }
    } else {
      if (s1CharTotal > 1) {
        variationTotal.add(s1CharTotal);
        winnerEachChar.set(char[0], "=:");
      }
    }
    s2CharTotalMap.delete(char[0]);
  }

  for (const char of s2CharTotalMap) {
    const s2CharTotal: number =
      s2CharTotalMap.get(char[0]) === undefined
        ? 0
        : s2CharTotalMap.get(char[0])!;
    if (s2CharTotal > 1) {
      winnerEachChar.set(char[0], "2:");
      variationTotal.add(s2CharTotal);

      const arrayOfCharGroupedByTotal = groupCharBasedTotal.get(s2CharTotal);
      if (arrayOfCharGroupedByTotal === undefined) {
        groupCharBasedTotal.set(s2CharTotal, [char[0]]);
      } else {
        const tempArray: string[] = groupCharBasedTotal.get(s2CharTotal)!;
        tempArray.push(char[0]);
        tempArray.sort();
        groupCharBasedTotal.set(s2CharTotal, tempArray);
      }
    }
  }

  const sortedVariationTotal: number[] = Array.from(variationTotal).sort();

  for (let i = sortedVariationTotal.length - 1; i >= 0; i--) {
    const total = sortedVariationTotal[i];
    const arr: string[] = groupCharBasedTotal.get(total)!;

    let s1String = "";
    let s2String = "";
    let drawString: string = "";

    for (let j = 0; j < arr.length; j++) {
      const char = arr[j];
      let chars: string = "";
      const winner = winnerEachChar.get(char);

      for (let k = 0; k < total; k++) {
        chars += char;
      }

      if (winner == "1:") {
        s1String += `${winner}${chars}/`;
      } else if (winner == "2:") {
        s2String += `${winner}${chars}/`;
      } else if (winner == "=:") {
        drawString += `${winner}${chars}/`;
      }
    }

    result += s1String;
    result += s2String;
    result += drawString;
  }

  const res = result.slice(0, -1);

  return res;
};

console.log(mix("dfdfdfdfLLLLddiiiiiiiizzz", "dfdfdfdfLLddiiiiiiizzzz"));
