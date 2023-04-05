// Unions allow for parameters to be of different types
// Use the '|' symbol between every possible type.
//
function combine(input1, input2) {
    var result;
    if (typeof input1 === "number" && typeof input2 === "number") {
        result = input1 + input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
}
var combinedAges = combine(30, 25);
console.log(combinedAges);
var combinedNames = combine("max", "anna");
console.log(combinedNames);
