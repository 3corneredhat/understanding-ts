function add(n1: number, n2: number, showResult: boolean, phrase: string) {
  //   if (typeof n1 !== "number" || typeof n2 !== "number") {
  //     throw new Error("Incorrect input!");
  //   }

  const result = n1 + n2;

  if (showResult) {
    console.log(phrase + result);
  } else {
    return result;
  }
}

// The following assignments exclude
// type because of TS's tyep inference.
const number1 = 5;
// State the type when declared and not assigned:
// const number1: number;
const number2 = 2.8;
const printResult = true;
const resultPhrase = "Result is: ";
add(number1, number2, printResult, resultPhrase);
