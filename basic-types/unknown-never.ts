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

// void is implied but never is more
// precise because when this code is
// executes the script crashes and
// triggers this error.
function generateError(message: string, code: number): never {
  throw { message: message, errorCode: code };
}

generateError("An error occurred!", 500);
