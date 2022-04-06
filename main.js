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
exports.__esModule = true;
console.clear();
var message = 'Welcome Back ..!!';
// console.log("🚀 ~ file: main.ts ~ line 2 ~ message", message)
/* VARIABLE TYPES - START */
var x = 10;
var y = 20;
var sum;
var title = 'NEVE';
var isBeginner = true;
var total = 0;
var name = 'Aditya';
var sentence = "\nMy name is ".concat(name, "\n").concat(title, ".\nI am Learning TypeScript.\n");
// console.log("🚀 ~ file: main.ts ~ line 16 ~ sentence", sentence)
name.charAt(3);
total.toFixed(5);
// Not much use
var n = null;
var u = undefined;
// But can use like this
var isNew = null;
var myName = undefined;
// We give type of an array like this
// Both syntax is valid
// You can use anyone you like
var list1 = [1, 2, 3];
var list2 = [1, 3, 3];
// You may need an array for mixed type
// Mixed array of touple type
// Number of elements in array is fixed here
// Given 1st value is String and 2nd value is number
// And order of value has to match order of the types
// We cannot add extra values other than the given types
// Syntax is like this
var person1 = ['Aditya', 3];
// enum type => friendly name to a set of numeric values
// we use enum keyword
var Color;
(function (Color) {
    Color[Color["Red"] = 5] = "Red";
    Color[Color["Green"] = 6] = "Green";
    Color[Color["Blue"] = 7] = "Blue";
})(Color || (Color = {}));
;
var c = Color.Green;
console.log("🚀 ~ file: main.ts ~ line 59 ~ c", c);
// random value of type any
// compiler will not throw any error
var randomValue = 10;
randomValue = true;
randomValue = 'Vishwas';
// As myVariable is of type any it will not throw any error
// if you call myVariable as a function call still it will not throw any error
// if you myVariable.toUpperCase() still it will throw any error
// if you write myVariable.name stil it will not give any error
var myVariable = 10;
// myVariable()
// myVariable.toUpperCase()
// console.log(myVariable.name)
console.log("🚀 ~ file: main.ts ~ line 70 ~ myVariable", myVariable);
// Type unknown
// TypeScript assumes that we have made a necessary check
// This is called as Type Assertion ( in other languages it is called as type casting )
// Here myVar is treated as a string, and after that toUpperCase method is applied
function hasName(obj) {
    return !!obj &&
        typeof obj === 'object' &&
        'name' in obj;
}
if (hasName(myVariable)) {
    console.log(myVariable.name);
}
var newVar = 10;
// (newVar as String).toUpperCase();
// Type Inference
// TypeScript can infer the data type of a variable as we assign values to them.
var a;
a = 10;
a = true;
var b = 20;
// Union Type
// In TypeScript, a union type variable is a variable which can store multiple type of values
// ( i.e number, String etc )
// MultiType
// In MultiType we can assign multiple types
// Use pipe
var multiType;
multiType = 20;
multiType = true;
/* VARIABLE TYPES - END */
/* FUNCTIONS - START */
// Function Syntax
/* function function_name(parameter: data_type): return data_type {
    return something
} */
function add(num1, num2) {
    return num1 + num2;
}
add(5, 10);
// Optional params in typescript
function addd(num1, num2) {
    if (num2)
        return num1 + num2;
    else
        return num1;
}
addd(5);
// Default params in typescript
function adddd(num1, num2) {
    if (num2 === void 0) { num2 = 10; }
    if (num2)
        return num1 + num2;
    else
        return num1;
}
adddd(5, 10);
adddd(5);
function fullName(person) {
    console.log("".concat(person.firstName, " ").concat(person.lastName));
}
var p = {
    firstName: 'Bruce',
    lastName: 'Wayne'
};
fullName(p);
function displayFullName(person) {
    console.log("".concat(person.firstName, " ").concat(person.lastName));
}
var pp = {
    firstName: 'Bruce',
    lastName: 'Wayne'
};
displayFullName(pp);
/* INTERFACES IN TYPESCRIPT - END */
/* CLASSES - START */
// Creating a class
var Employee = /** @class */ (function () {
    function Employee(name) {
        this.employeeName = name;
    }
    Employee.prototype.greet = function () {
        console.log("Good Morning: ".concat(this.employeeName));
    };
    return Employee;
}());
var emp1 = new Employee('Jack');
emp1.greet();
// Creating calss Manager
// Because of classes, now its possible to have class base inheritance
// A manager is just an employee with just some extra privileges
// So instead of repeating the properties of an employee in manager class
// We can simply inherit them
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(managerName) {
        return _super.call(this, managerName) || this;
    }
    Manager.prototype.delegateWork = function () {
        console.log("Manager delegating tasks.");
    };
    return Manager;
}(Employee));
var manager = new Manager('Stark');
manager.delegateWork();
manager.greet();
console.log(manager.employeeName);
/* CLASSES- END */
