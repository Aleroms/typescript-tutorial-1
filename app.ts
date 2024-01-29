//generic type
// const names: Array<string> = [];

// const promise: Promise<string> = new Promise((res, rej) => {
//   setTimeout(() => {
//     res("done");
//   }, 2000);
// });
//better type safety with generic types

//creating generic types
//creating constraints
function merge<T extends object, U extends object>(objA: T, objB: U) {
  return { ...objA, ...objB };
}
// const mergeObj = merge({ name: "max" }, { age: 19 });
const mergeObj = merge({ name: "max" }, { age: 30 });
console.log(mergeObj);

interface Lengthy {
  length: number;
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
  let desc = "Got no values";
  if (element.length > 0) {
    desc = "got" + element.length + " elements";
  }
  return [element, desc];
}
console.log(countAndDescribe("Hi there"));

//keyof contraints - ensures structure of T
function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return "value" + obj[key];
}
extractAndConvert({ name: "max" }, "name");

//generic classes
class DataStorage<T extends string | number | boolean> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }
  removeItem(item: T) {
    this.data.splice(this.data.indexOf(item), 1);
  }
  getItems() {
    return [...this.data];
  }
}
const t1 = new DataStorage<string>();
t1.addItem("max");
t1.addItem("a");
t1.removeItem("a");
//flexible but strongly typed
const n1 = new DataStorage<number>();

interface CourseGoal {
  title: string;
  description: string;
  completeUntil: Date;
}

function CreateCourseGoal(
  title: string,
  description: string,
  date: Date
): CourseGoal {
  let course: Partial<CourseGoal> = {};
  course.title = title;
  course.description = description;
  course.completeUntil = date;
  return course as CourseGoal;
}

const names: Readonly<string[]> = ["max", "mil"];
// names.push('') // throws errors
