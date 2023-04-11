// unknown type is different from any
var userInput;
var userName;
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
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
generateError("An error occurred!", 500);
