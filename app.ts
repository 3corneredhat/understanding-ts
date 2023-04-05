// Unions allow for parameters to be of different types
// Use the '|' symbol between every possible type.

// Ex. function func(input1: number | input2: string| input3: boolean)
// function combine(input1: number | string, input2: number | string) {
//   let result;
//   if (typeof input1 === "number" && typeof input2 === "number") {
//     result = input1 + input2;
//   } else {
//     result = input1.toString() + input2.toString();
//   }

//   return result;
// }

function combine(
  input1: number | string,
  input2: number | string,
  // The following indicates 'literals' where
  // the specific core type is string but is
  // specifically one of two specific strings:
  // "as-number" | "as-text"
  resultConversion: "as-number" | "as-text"
) {
  let result;
  if (
    (typeof input1 === "number" && typeof input2 === "number") ||
    resultConversion === "as-number"
  ) {
    // '+' in front of the variable converts it to a number.
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }

  return result;
}

const combinedAges = combine(30, 25, "as-number");
console.log(combinedAges);

const combinedStringAges = combine("30", "32", "as-number");
console.log(combinedStringAges);

const combinedNames = combine("max", "anna", "as-text");
console.log(combinedNames);
