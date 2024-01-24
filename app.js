//let typescript infer type return
function add(n1, n2) {
    return n1 + n2;
}
function printResult(num) {
    console.log("result:" + num);
}
printResult(add(5, 12));
function addAndHandle(n1, n2, cb) {
    var res = n1 + n2;
    cb(res);
}
var combineValues;
combineValues = add;
console.log(combineValues(8, 8));
// combineValues = printResult
addAndHandle(10, 20, function (res) {
    console.log(res);
});
