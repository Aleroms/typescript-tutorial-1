// unkown better than any
//makes sure you aren't allowed to do anything
let userInput: unknown;
let username: string;
userInput = 5;
userInput = "max";
if (typeof userInput === "string") username = userInput;

//never returns
function generateError(message: string, code: number): never {
  throw { message: message, errorCode: code };
}

const res = generateError("errror", 500);
console.log(res);
