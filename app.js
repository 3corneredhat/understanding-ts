function add(n1, n2) {
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
function printResult(num) {
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
var combineValues;
combineValues = add;
console.log(combineValues(8, 8));
