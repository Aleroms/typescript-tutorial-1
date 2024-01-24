// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string];
// } = {
enum Role {
  ADMIN,
  RO,
  AUTHOR,
}
const person = {
  name: "Santiago",
  age: 26,
  hobbies: ["coding", "gym"],
  role: Role.ADMIN,
};

// person.role.push("admin");
// person.role[1] = 10;
// person.role = [0, "admin"];
let favoriteActivities: string[];
let other: any[];
favoriteActivities = ["a"];
favoriteActivities.push("b");
console.log(person);

for (const h of person.hobbies) {
  console.log(h);
}
if (person.role === Role.AUTHOR) {
  console.log("author");
}
