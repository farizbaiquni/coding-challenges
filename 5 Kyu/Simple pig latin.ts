// link = https://www.codewars.com/kata/520b9d2ad5c005041100000f

export const pigIt = (text: string): string => {
  let result: string = "";

  let isFirstWordFromSentence: boolean = true;
  let tempMovedCharacter: string = "";

  for (let i = 0; i < text.length; i++) {
    const PUNCTUATIONS = [
      "!",
      '"',
      "#",
      "$",
      "%",
      "&",
      "'",
      "(",
      ")",
      "*",
      "+",
      ",",
      "-",
      ".",
      "/",
      ":",
      ";",
      "<",
      "=",
      ">",
      "?",
      "@",
      "[",
      "\\",
      "]",
      "^",
      "_",
      "`",
      "{",
      "|",
      "}",
      "~",
      " ",
    ];

    if (text[i] !== " ") {
      if (isFirstWordFromSentence) {
        // Jika huruf awal kata
        tempMovedCharacter = text[i];
        isFirstWordFromSentence = false;
      } else {
        // Jika tidak huruf awal kata
        result += text[i];
      }
    }

    if (text[i] === " " && text[i - 1] === " ") {
      // Jika huruf saat ini spasi dan sebelumnya spasi maka tambahkan spasi ke result
      result = result + " ";
      if (text[i + 1] !== " ") {
        // Jika huruf saat ini spasi, sebelumnya spasi, dan setelahnya tidak spasi awal dari kata
        isFirstWordFromSentence = true;
      }
    }

    // Mengecek akhir sebuah kalimat, dgn syarat huruf sebelumnya tidak spasi
    if (text[i] === " " && text[i - 1] !== " ") {
      //Jika merupakan awal kalimat adalah spasi
      if (text[i - 1] === undefined) {
        result += " ";
      } else {
        // Memastikan bahwa spasi ke-2 tidak menjadi awal huruf sebuah kata
        // contoh: "Pay  food" maka spasi sebelum f tidak awal kalimat
        if (text[i + 1] !== " ") {
          isFirstWordFromSentence = true;
        }
        if (PUNCTUATIONS.includes(tempMovedCharacter)) {
          result += tempMovedCharacter + " ";
        } else {
          result += tempMovedCharacter + "ay ";
        }
      }
    }

    if (i == text.length - 1) {
      if (text[i] !== " ") {
        if (PUNCTUATIONS.includes(tempMovedCharacter)) {
          result += tempMovedCharacter;
        } else {
          result += tempMovedCharacter + "ay";
        }
      }
    }
  }
  return result;
};

console.log(pigIt("! zY H "));
// console.log(pigIt("! Pig  latin is cool ! !ma"));
