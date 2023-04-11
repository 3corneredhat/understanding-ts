// unknown type is different from any
let userInput: unknown;
let userName: string;

userInput = 5;
userInput = "Max";

// error occurs because unknown can't be
// assigned to a type string (userName).
// userName = userInput;

// unknown is more restrictive than
// 'any' type. We can check what
// what the type may be, thus is
// preferred over 'any'. However,
// we should limit the use of unknown.
if (typeof userInput === "string") {
  userName = userInput;
}
