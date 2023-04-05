function add(n1: number, n2: number) {
  return n1 + n2;
}

// Return types can be explicitly declared
// using colon and followed by the type. But
// it takes away from the power of inference.
// function add(n1: number, n2: number): string {
//   return n1.toString() + n2.toString();
// }

// The return type in this function is void.
// It can be declared explicitly.
function printResult(num: number): void {
  console.log("Result: " + num);
}

// The return type here is undefined, and will
// rarely be needed.
//
// function printResult(num: number): undefined {
//   console.log("Result: " + num);
//   return;
// }

printResult(add(5, 12));

// A variable can also be declared as a
// Function type.
//
// let combineValues: () => number;
let combineValues: (a: number, b: number) => number;

combineValues = add;

// The following assignment gives us a compiler error
// because the assigned function needs to meet the criteria
// above:
// combineValues = printResult;

console.log(combineValues(8, 8));
