// link = https://www.codewars.com/kata/54d496788776e49e6b00052f

function isPrime(num: number): boolean {
  if (num <= 1) return false;
  if (num <= 3) return true;
  if (num % 2 === 0 || num % 3 === 0) return false;
  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
  }
  return true;
}

function getPrimes(max: number): number[] {
  const primes: number[] = [];
  for (let i = 2; i <= max; i++) {
    if (isPrime(i)) primes.push(i);
  }
  return primes;
}

export function sumOfDivided(arr: number[]): number[][] {
  const factorSums: Map<number, number> = new Map();
  const maxNum: number = Math.max(...arr.map((num) => Math.abs(num)));
  const primes = getPrimes(maxNum);
  arr.forEach((number) => {
    primes.forEach((prime) => {
      if (number % prime === 0) {
        if (!factorSums.has(prime)) {
          factorSums.set(prime, 0);
        }
        factorSums.set(prime, factorSums.get(prime)! + number);
      }
    });
  });
  const result = Array.from(factorSums.entries()).sort((a, b) => a[0] - b[0]);
  return result;
}

console.log(sumOfDivided([3, -50, 30]));
