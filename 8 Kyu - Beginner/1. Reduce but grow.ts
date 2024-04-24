// link : https://www.codewars.com/kata/57f780909f7e8e3183000078/train/typescript
export function grow(arr: number[]): number {
  let result = 1;
  for (let i = 0; i < arr.length; i++) {
    result *= arr[i];
  }
  return result;
}

console.log(grow([1, 2, 5, 9]));
