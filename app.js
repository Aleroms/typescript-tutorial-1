"use strict";
function printEmployeeInformation(emp) {
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
var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.drive = function () {
        console.log("driving...");
    };
    return Car;
}());
var Truck = /** @class */ (function () {
    function Truck() {
    }
    Truck.prototype.drive = function () {
        console.log("driving a truck");
    };
    Truck.prototype.loadCarge = function (amount) {
        console.log("loading cargo..." + amount);
    };
    return Truck;
}());
var v1 = new Car();
var v2 = new Truck();
function useVehicle(vehicle) {
    vehicle.drive();
    //type guarding
    //compiled at run time
    if (vehicle instanceof Truck) {
        vehicle.loadCarge(1000);
    }
}
