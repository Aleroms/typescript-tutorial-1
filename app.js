"use strict";
//generic type
// const names: Array<string> = [];
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// const promise: Promise<string> = new Promise((res, rej) => {
//   setTimeout(() => {
//     res("done");
//   }, 2000);
// });
//better type safety with generic types
//creating generic types
//creating constraints
function merge(objA, objB) {
    return __assign(__assign({}, objA), objB);
}
// const mergeObj = merge({ name: "max" }, { age: 19 });
var mergeObj = merge({ name: "max" }, { age: 30 });
console.log(mergeObj);
function countAndDescribe(element) {
    var desc = "Got no values";
    if (element.length > 0) {
        desc = "got" + element.length + " elements";
    }
    return [element, desc];
}
console.log(countAndDescribe("Hi there"));
//keyof contraints - ensures structure of T
function extractAndConvert(obj, key) {
    return "value" + obj[key];
}
extractAndConvert({ name: "max" }, "name");
//generic classes
var DataStorage = /** @class */ (function () {
    function DataStorage() {
        this.data = [];
    }
    DataStorage.prototype.addItem = function (item) {
        this.data.push(item);
    };
    DataStorage.prototype.removeItem = function (item) {
        this.data.splice(this.data.indexOf(item), 1);
    };
    DataStorage.prototype.getItems = function () {
        return __spreadArray([], this.data, true);
    };
    return DataStorage;
}());
var t1 = new DataStorage();
t1.addItem("max");
t1.addItem("a");
t1.removeItem("a");
//flexible but strongly typed
var n1 = new DataStorage();
function CreateCourseGoal(title, description, date) {
    var course = {};
    course.title = title;
    course.description = description;
    course.completeUntil = date;
    return course;
}
var names = ["max", "mil"];
// names.push('') // throws errors
