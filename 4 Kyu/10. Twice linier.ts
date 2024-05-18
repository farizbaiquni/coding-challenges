// link : https://www.codewars.com/kata/5672682212c8ecf83e000050

export function dblLinear(n: number): number {
  let arr: number[] = [1];
  let q2: number[] = [];
  let q3: number[] = [];
  let seen: Set<number> = new Set([1]);

  for (let i = 0; i < n; i++) {
    const num = arr[i];

    const res1 = 2 * num + 1;
    const res2 = 3 * num + 1;

    if (!seen.has(res1)) {
      q2.push(res1);
      seen.add(res1);
    }

    if (!seen.has(res2)) {
      q3.push(res2);
      seen.add(res2);
    }

    const minQ2 = q2[0];
    const minQ3 = q3[0];

    const minNum = Math.min(minQ2, minQ3);

    if (minNum === q2[0]) {
      q2.shift();
    } else {
      q3.shift();
    }

    arr.push(minNum);
  }
  return arr[n];
}

console.log(dblLinear(10));
