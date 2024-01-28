abstract class Department {
  //readonly exists only in typescript
  //private readonly id: string;
  static fiscalYear = 2020;
  protected employees: string[] = [];

  constructor(private readonly id: string, public name: string) {}
  //this is a hint to what this.name is
  //refers to instance
  abstract describe(this: Department): void;

  addEmployee(emp: string) {
    this.employees.push(emp);
  }
  static createEmployee(name: string) {}
  printEmployeeInfo() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class ITDepartment extends Department {
  admins: string[];

  describe() {
    console.log(this.name);
  }
  get recentAdmins() {
    if (this.admins.length > 0) {
      return this.admins;
    }
  }
  set newAdmins(value: string) {
    if (!value) {
      this.admins.push(value);
    }
  }
  constructor(id: string, public admin: string[]) {
    super(id, "IT");
    this.admins = admin;
  }
  addEmployee(emp: string): void {
    this.employees.push(emp);
  }
}

//abstract classes cannot be instantiated
const it = new ITDepartment("d2", ["max", "tom"]);
it.describe();
it.newAdmins = "setter";
console.log(it.recentAdmins);
console.log(it.recentAdmins);
// accounting.addEmployee("max");
// accounting.addEmployee("manu");
//vanilla javascript does not support private
// accounting.employees[3] = "s";
//need this property.
// accountingCopy.describe();
console.log(Department.fiscalYear);
