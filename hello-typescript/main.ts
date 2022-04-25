export { }

console.clear();

let message = 'Welcome Back ..!!';
// console.log("🚀 ~ file: main.ts ~ line 2 ~ message", message)


/* VARIABLE TYPES - START */
let x = 10
const y = 20

let sum;
const title = 'NEVE';

let isBeginner: boolean = true;
let total: number = 0;
let name: String = 'Aditya';


let sentence: String = `
My name is ${name}
${title}.
I am Learning TypeScript.
`
// console.log("🚀 ~ file: main.ts ~ line 16 ~ sentence", sentence)

name.charAt(3)
total.toFixed(5)

// Not much use
let n: null = null;
let u: undefined = undefined;

// But can use like this
let isNew: boolean = null;
let myName: String = undefined;


// We give type of an array like this
// Both syntax is valid
// You can use anyone you like
let list1: number[] = [1, 2, 3]
let list2: Array<number> = [1, 3, 3]

// You may need an array for mixed type
// Mixed array of touple type
// Number of elements in array is fixed here
// Given 1st value is String and 2nd value is number
// And order of value has to match order of the types
// We cannot add extra values other than the given types
// Syntax is like this
let person1: [String, number] = ['Aditya', 3];



// enum type => friendly name to a set of numeric values
// we use enum keyword
enum Color { Red = 5, Green, Blue };
let c: Color = Color.Green;
console.log("🚀 ~ file: main.ts ~ line 59 ~ c", c)


// random value of type any
// compiler will not throw any error
let randomValue: any = 10;
randomValue = true;
randomValue = 'Vishwas';

// As myVariable is of type any it will not throw any error
// if you call myVariable as a function call still it will not throw any error
// if you myVariable.toUpperCase() still it will throw any error
// if you write myVariable.name stil it will not give any error
let myVariable: any = 10;
// myVariable()
// myVariable.toUpperCase()
// console.log(myVariable.name)
console.log("🚀 ~ file: main.ts ~ line 70 ~ myVariable", myVariable)


// Type unknown
// TypeScript assumes that we have made a necessary check
// This is called as Type Assertion ( in other languages it is called as type casting )
// Here myVar is treated as a string, and after that toUpperCase method is applied

function hasName(obj: any): obj is { name: String } {
    return !!obj &&
        typeof obj === 'object' &&
        'name' in obj
}

if (hasName(myVariable)) {
    console.log(myVariable.name)
}

let newVar: unknown = 10;
// (newVar as String).toUpperCase();



// Type Inference
// TypeScript can infer the data type of a variable as we assign values to them.
let a;
a = 10;
a = true;

let b = 20;

// Union Type
// In TypeScript, a union type variable is a variable which can store multiple type of values
// ( i.e number, String etc )
// MultiType
// In MultiType we can assign multiple types
// Use pipe
let multiType: number | boolean;
multiType = 20;
multiType = true;

/* VARIABLE TYPES - END */


/* FUNCTIONS - START */

// Function Syntax
/* function function_name(parameter: data_type): return data_type {
    return something
} */

function add(num1: number, num2: number): number {
    return num1 + num2
}
add(5, 10)


// Optional params in typescript
function addd(num1: number, num2?: number): number {
    if (num2) return num1 + num2;
    else return num1;
}
addd(5)

// Default params in typescript
function adddd(num1: number, num2: number = 10): number {
    if (num2) return num1 + num2;
    else return num1;
}
adddd(5, 10)
adddd(5)


function fullName(person: { firstName: String, lastName: String }) {
    console.log(`${person.firstName} ${person.lastName}`)
}

let p = {
    firstName: 'Bruce',
    lastName: 'Wayne'
};

fullName(p)


/* FUNCTIONS - END */




/* INTERFACES IN TYPESCRIPT - START */

// In TypeScript, an interface is an abstract type that tells the compiler which property names a given object can have.
// Imagine having function with soo many parameters
// Like: firstName, lastName, address etc etc
// Giving soo many parameters will make code look more clumsy
// It will be hard to fing bug
// The Solution for this is, We have INTERFACES in TypeScript
// You Can see now the code looks much more cleaner

// We can also add optional parameters by adding '?' to the interface property
// You cannot add default values to interface
// But you can make it as optional by adding '?' to the interface

interface Person {
    firstName: String,
    lastName?: String
}
let person: Person = {
    firstName: "ABC",
    lastName: "XYZ"
}

function displayFullName(person: Person) {
    console.log("🚀 ~ file: main.ts ~ line 193 ~ displayFullName ~ person", person)
    console.log(`${person.firstName} ${person.lastName}`)
}
// let pp = {
//     firstName: 'Bruce',
//     // lastName: 'Wayne'
// };

person.firstName = 'Hello'
displayFullName(person)

/* INTERFACES IN TYPESCRIPT - END */



/* CLASSES - START */


// Creating a class
class Employee {
    employeeName: String;

    constructor(name: String) {
        this.employeeName = name;
    }

    greet() {
        console.log(`Good Morning: ${this.employeeName}`);
    }
}

let emp1 = new Employee('Jack');
emp1.greet()


// Creating calss Manager
// Because of classes, now its possible to have class base inheritance
// A manager is just an employee with just some extra privileges
// So instead of repeating the properties of an employee in manager class
// We can simply inherit them

class Manager extends Employee {
    constructor(managerName: String) {
        super(managerName);
    }

    delegateWork() {
        console.log(`Manager delegating tasks.`);
    }
}
let manager = new Manager('Stark');
manager.delegateWork()
manager.greet()
console.log(manager.employeeName);


/* CLASSES- END */


/* ACCESS MODIFIERS - START */


// By default each class members are public
// So, we can freely access them in the program

class Teacher {
    public teacherName: String; // Free accessibility
    private phoneNumber: number; // Accessibility only within the class
    protected age: number; // Accessibility within the class and the classes derived from it

    constructor(name: String) {
        this.teacherName = name;
    }

    greet() {
        console.log(`Good Morning: ${this.teacherName}`);
    }
}

let teacher = new Teacher('Tori');
teacher.greet()


/* ACCESS MODIFIERS - END */