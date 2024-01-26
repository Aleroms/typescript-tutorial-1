//let typescript infer type return
function add(n1: number, n2: number) {
  return n1 + n2;
}
function printResult(num: number) {
  console.log("result:" + num);
}
printResult(add(5, 12));

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const res = n1 + n2;
  cb(res);
}

let combineValues: (a: number, b: number) => number;
combineValues = add;
console.log(combineValues(8, 8));
// combineValues = printResult

addAndHandle(10, 20, (res) => {
  console.log(res);
});

function sendRequest(data: string, cb: (response: any) => void) {
    // ... sending a request with "data"
    return cb({data: 'Hi there!'});
  }
   
  sendRequest('Send this!', (response) => { 
    console.log(response);
    return true;
   });