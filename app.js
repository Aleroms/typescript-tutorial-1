"use strict";
// unkown better than any
//makes sure you aren't allowed to do anything
let userInput;
let username;
userInput = 5;
userInput = "max";
if (typeof userInput === "string")
    username = userInput;
//never returns
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
const res = generateError("errror", 500);
console.log(res);
