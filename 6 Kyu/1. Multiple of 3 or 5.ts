// link : https://www.codewars.com/kata/514b92a657cdc65150000006

export class Challenge {
  static solution(number: number) {
    let result: number = 0;
    let array: number[] = [];
    let cont = true;
    let multiple3 = 3;
    let multiple5 = 5;
    do {
      if (multiple3 < number && !array.includes(multiple3)) {
        array.push(multiple3);
      }

      if (multiple5 < number && !array.includes(multiple5)) {
        array.push(multiple5);
      }

      if (multiple3 > number && multiple5 > number) {
        cont = false;
      }

      multiple3 += 3;
      multiple5 += 5;
    } while (cont);

    result = array.reduce(
      (prevValue, currentValue, currentIndex) => prevValue + currentValue,
      0
    );

    return result; //change this
  }
}

console.log(Challenge.solution(10));
