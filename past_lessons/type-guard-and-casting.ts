type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type ElevatedEmployee = Admin & Employee;

type UnknownEmployee = Employee | Admin;

function printEmployeeInformation(emp: UnknownEmployee) {
  console.log("name: " + emp.name);
  //checks if property exists
  //from vanilla javascript
  if ("privileges" in emp) {
    console.log("privileges" + emp.privileges);
  }
  if ("startDate" in emp) {
    emp.startDate;
  }
}
class Car {
  drive() {
    console.log("driving...");
  }
}
class Truck {
  drive() {
    console.log("driving a truck");
  }
  loadCarge(amount: number) {
    console.log("loading cargo..." + amount);
  }
}
type Vehicle = Car | Truck;
const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
  vehicle.drive();

  //type guarding
  //compiled at run time
  if (vehicle instanceof Truck) {
    vehicle.loadCarge(1000);
  }
}

useVehicle(v1);
useVehicle(v2);

interface Bird {
  flyingSpeed: number;
  type: "bird";
}
interface Horse {
  runningSpeed: number;
  type: "horse";
}
type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
  let speed;
  switch (animal.type) {
    case "bird":
      speed = animal.flyingSpeed;
      break;
    case "horse":
      speed = animal.runningSpeed;
      break;
  }
  console.log("moving with speed" + speed);
}
moveAnimal({ type: "bird", flyingSpeed: 10 });

const paragraph = document.querySelector("p");
//this is type casting <HTMLInputElement>
// const userInputElement = <HTMLInputElement>document.getElementById("id");
//another way to typecast
const userInputElement = document.getElementById("id") as HTMLInputElement;
userInputElement.value = "hi";

interface ErrorContainer {
  //make this flexible
  // indexx type
  //must have properties that are only strings
  //[ the property type] :// its value
  [prop: string]: string;
  //   id: string;
  //   n: number; //this fails
}
const errorBag: ErrorContainer = {
  // email: 1 // fails
  email: "not a valid email",
  username: "usnames",
};

type Combinable = string | number;
type Numberic = number | boolean;
type Universal = Combinable & Numberic;

//this is function overload
function add(a: number, b: number): number;
function add(a: Combinable, b: Combinable) {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}
//optional chaining
const fetchedUserData = {
  id: "u1",
  name: "max",
  job: { title: "ceo" },
};

const uin = "";
//only works for null or undefined '??'
const storedData = uin ?? "default";
