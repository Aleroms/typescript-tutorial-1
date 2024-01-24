// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string];
// } = {
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["RO"] = 1] = "RO";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
var person = {
    name: "Santiago",
    age: 26,
    hobbies: ["coding", "gym"],
    role: Role.ADMIN,
};
// person.role.push("admin");
// person.role[1] = 10;
// person.role = [0, "admin"];
var favoriteActivities;
var other;
favoriteActivities = ["a"];
favoriteActivities.push("b");
console.log(person);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var h = _a[_i];
    console.log(h);
}
if (person.role === Role.AUTHOR) {
    console.log("author");
}
