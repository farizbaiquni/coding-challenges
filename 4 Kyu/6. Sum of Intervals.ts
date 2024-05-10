// link = https://www.codewars.com/kata/52b7ed099cdc285c300001cd

export function sumOfIntervals(intervals: ([number, number] | undefined)[]) {
  let result: number = 0;
  for (let i = 0; i < intervals.length; i++) {
    for (let j = 0; j < intervals.length; j++) {
      if (intervals[j] !== undefined && intervals[i] !== undefined) {
        if (i !== j) {
          const indexFirstCompare =
            intervals[i]![0] <= intervals[j]![0] ? i : j;
          const indexSecondCompare = indexFirstCompare === i ? j : i;
          if (
            intervals[indexFirstCompare]![1] > intervals[indexSecondCompare]![0]
          ) {
            if (
              intervals[indexFirstCompare]![1] <
              intervals[indexSecondCompare]![1]
            ) {
              intervals[indexFirstCompare]![1] =
                intervals[indexSecondCompare]![1];
            }
            intervals[indexSecondCompare] = undefined;
          }
        }
      }
    }
  } // end for
  for (const interval of intervals) {
    if (interval !== undefined) {
      const sum = interval[1] - interval[0];
      result += sum;
    }
  }
  return result;
}

console.log(
  sumOfIntervals([
    [1, 5],
    [10, 20],
    [1, 6],
    [16, 19],
    [5, 11],
  ])
);
