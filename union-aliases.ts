type User = { name: string; age: number };
const u1: User = { name: "santiago", age: 27 };
type Combinable = number | string;
type ConversionDesc = "as-number" | "as-txt";

function combine(
  i1: Combinable,
  i2: Combinable,
  resultConversion: ConversionDesc
) {
  let res;
  //with union types you must check types
  if (typeof i1 === "number" && typeof i2 === "number") {
    res = i1 + i2;
  } else {
    res = i1.toString() + i2.toString();
  }
  if (resultConversion === "as-number") {
    return +res;
  } else {
    return res.toString();
  }
  return res;
}
const combinedAges = combine(30, 26, "as-number");
const combinedStringAges = combine("30", "26", "as-number");
console.log(combinedStringAges);
console.log(combinedAges);
const combinedNames = combine("santiago", "morales", "as-txt");
console.log(combinedNames);
