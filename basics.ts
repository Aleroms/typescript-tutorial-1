function add(n1: number, n2: number, showRes: boolean, phrase: string) {
  const res = n1 + n2;
  if (showRes) {
    console.log(phrase + res);
  } else {
    return res;
  }
}
//type inference typescript
let n1: number;
n1 = 5;
const n2 = 2.8;
const printResult = true;
const phrase = "result is: ";
add(n1, n2, printResult, phrase);
