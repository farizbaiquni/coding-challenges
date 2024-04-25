// link = https://www.codewars.com/kata/5266876b8f4bf2da9b000362

export const likes = (people: string[]): string => {
  let result: string = "";
  switch (people.length) {
    case 0:
      result = "no one likes this";
      break;
    case 1:
      result = `${people[0]} likes this`;
      break;
    case 2:
      result = `${people[0]} and ${people[1]} like this`;
      break;
    case 3:
      result = `${people[0]}, ${people[1]} and ${people[2]} like this`;
      break;
    default:
      const left = people.length - 2;
      result = `${people[0]}, ${people[1]} and ${left} others like this`;
      break;
  }
  return result;
};

console.log(likes(["Alex", "Jacob", "Mark", "Max", "Suki"]));
