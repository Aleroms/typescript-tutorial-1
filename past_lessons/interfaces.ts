//interface describes the structure of an object
//does not exist in javascript
//interfaces define structure
interface Named {
  readonly name: string;
  //this property is optional
  outputName?: string;
}
interface AddFn {
  //anon func
  (a: number, b: number): number;
}
let add: AddFn;
add = (n1: number, n2: number) => {
  return n1 + n2;
};
interface Greetable extends Named {
  greet(phrase: string): void;
}
class Person implements Greetable {
  name: string;
  age = 26;
  constructor(n: string) {
    this.name = n;
  }
  greet(phrase: string) {
    console.log(phrase, this.name, this.age);
  }
}
let user1 = new Person("santi");
user1.greet("Hi I am ");
