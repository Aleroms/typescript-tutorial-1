function combine(i1, i2, resultConversion) {
    var res;
    //with union types you must check types
    if (typeof i1 === "number" && typeof i2 === "number") {
        res = i1 + i2;
    }
    else {
        res = i1.toString() + i2.toString();
    }
    if (resultConversion === "as-number") {
        return +res;
    }
    else {
        return res.toString();
    }
    return res;
}
var combinedAges = combine(30, 26, "as-number");
var combinedStringAges = combine("30", "26", "as-number");
console.log(combinedStringAges);
console.log(combinedAges);
var combinedNames = combine("santiago", "morales", "as-txt");
console.log(combinedNames);
