// link : https://www.codewars.com/kata/55c6126177c9441a570000cc

type WeightStats = {
  weight: string;
  rank: number;
};

export function orderWeight(weightListString: string): string {
  const weightsArray: string[] = weightListString.split(" ");
  let weightStatsArray: WeightStats[] = [];

  for (let i = 0; i < weightsArray.length; i++) {
    const digits: number[] = weightsArray[i]
      .split("")
      .map((value) => Number.parseInt(value));

    const rank = digits.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0
    );
    weightStatsArray.push({ weight: weightsArray[i], rank });
  }
  const sortedStatsArray = bubbleSort(weightStatsArray);
  const sortedWeights = sortedStatsArray.map((stat) => stat.weight).join(" ");
  return sortedWeights;
}

function bubbleSort(arr: WeightStats[]): WeightStats[] {
  let n: number = arr.length;
  let i: number, j: number;
  let swapped: boolean;

  for (i = 0; i < n - 1; i++) {
    swapped = false;
    for (j = 0; j < n - i - 1; j++) {
      const rankA = arr[j].rank;
      const rankB = arr[j + 1].rank;
      const weightA = arr[j].weight;
      const weightB = arr[j + 1].weight;

      if (rankA === rankB) {
        // Jika jumlah digit sama, urutkan secara leksikografis
        if (weightA.localeCompare(weightB) > 0) {
          // Swap arr[j] and arr[j+1]
          let temp: WeightStats = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
          swapped = true;
        }
      } else if (rankA > rankB) {
        // Swap arr[j] and arr[j+1]
        let temp: WeightStats = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        swapped = true;
      }
    }

    // If no two elements were
    // swapped by inner loop, then break
    if (!swapped) break;
  }

  return arr;
}

console.log(orderWeight("56 65 74 100 99 68 86 180 90"));

// 56: 5 + 6        = 11
// 65: 6 + 5        = 11
// 74: 7 + 4        = 11
// 100: 1 + 0 + 0   = 1
// 99: 9 + 9        = 18
// 68: 6 + 8        = 14
// 86: 8 + 6        = 14
// 180: 1 + 8 + 0   = 9
// 90: 9 + 0        = 9
