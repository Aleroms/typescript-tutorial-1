"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Department = /** @class */ (function () {
    function Department(id, name) {
        this.id = id;
        this.name = name;
        this.employees = [];
    }
    //this is a hint to what this.name is
    //refers to instance
    Department.prototype.describe = function () {
        console.log("Department", this.name);
    };
    Department.prototype.addEmployee = function (emp) {
        this.employees.push(emp);
    };
    Department.createEmployee = function (name) { };
    Department.prototype.printEmployeeInfo = function () {
        console.log(this.employees.length);
        console.log(this.employees);
    };
    //readonly exists only in typescript
    //private readonly id: string;
    Department.fiscalYear = 2020;
    return Department;
}());
var ITDepartment = /** @class */ (function (_super) {
    __extends(ITDepartment, _super);
    function ITDepartment(id, admin) {
        var _this = _super.call(this, id, "IT") || this;
        _this.admin = admin;
        _this.admins = admin;
        return _this;
    }
    Object.defineProperty(ITDepartment.prototype, "recentAdmins", {
        get: function () {
            if (this.admins.length > 0) {
                return this.admins;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ITDepartment.prototype, "newAdmins", {
        set: function (value) {
            if (!value) {
                this.admins.push(value);
            }
        },
        enumerable: false,
        configurable: true
    });
    ITDepartment.prototype.addEmployee = function (emp) {
        this.employees.push(emp);
    };
    return ITDepartment;
}(Department));
var accounting = new Department("1", "Accounting");
var it = new ITDepartment("d2", ["max", "tom"]);
it.describe();
it.newAdmins = "setter";
console.log(it.recentAdmins);
console.log(it.recentAdmins);
accounting.addEmployee("max");
accounting.addEmployee("manu");
//vanilla javascript does not support private
// accounting.employees[3] = "s";
console.log(accounting);
accounting.describe();
accounting.printEmployeeInfo();
//need this property.
var accountingCopy = { name: "s", describe: accounting.describe };
// accountingCopy.describe();
console.log(Department.fiscalYear);
