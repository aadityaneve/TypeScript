"use strict";
/* let person: {
    name: string,
    age: number
} = {
    name: 'Leela',
    age: 99
}

console.log(person.name) */
let person = {
    name: 'Leela',
    age: 99,
    hobbies: ['sports', 'cooking'],
};
let favorites1;
favorites1 = ['animals', 1];
let favorites2;
favorites2 = ['animals'];
let favorites3;
favorites3 = [{ name: 'adsfs' }];
for (let hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
}
// Tuple
let person1 = {
    name: 'Leela',
    age: 99,
    hobbies: ['sports', 'cooking'],
    role: [2, 'author']
};
person1.role.push('admin');
console.log(person1);
let employee = [5, 'asdfds'];
let emp;
emp = [22, 'adsfasd'];
console.log(emp);
// ENUMS
var ROLES;
(function (ROLES) {
    ROLES[ROLES["ADMIN"] = 0] = "ADMIN";
    ROLES[ROLES["AUTHOR"] = 1] = "AUTHOR";
    ROLES["GUEST"] = "GUEST";
    ROLES[ROLES["UNKNOWN"] = 99] = "UNKNOWN";
})(ROLES || (ROLES = {}));
let person2 = {
    name: 'Leela',
    age: 333,
    hobbies: ['sports', 'cooking'],
    role: ROLES.ADMIN
};
if (person2.role === ROLES.ADMIN) {
    console.log('User is Admin');
}
// Any
/* let arr: any[]
arr.push('adfdsfa')
arr.push(2) */
// Union
// In ts, a union type variable is a variable which can store multiple type of
//  i.e ( number, string, etc). A union type allows us to define a variable
//  with multiple types. The union type vairables are defined using the pipe ( | )
//  symbol between the types. The union types help in some special situations
function combine(num1, num2) {
    if (typeof num1 === 'number' && typeof num2 === 'number')
        return num1 + num2;
    else
        return num1.toString() + num2.toString();
}
let ans1 = combine(1, 'Aditya');
console.log(ans1);
// Literal Type
var RESULT_TYPES;
(function (RESULT_TYPES) {
    RESULT_TYPES["AS_NUMBER"] = "as-number";
    RESULT_TYPES["AS_TEXT"] = "as-text";
})(RESULT_TYPES || (RESULT_TYPES = {}));
function combine2(num1, num2, resultType) {
    let result;
    if (typeof num1 === 'number' && typeof num2 === 'number')
        result = num1 + num2;
    else
        result = num1.toString() + num2.toString();
    if (resultType === RESULT_TYPES.AS_NUMBER)
        return +result;
    else
        return result.toString();
}
console.log(combine2(1, 2, 'as-number'));
console.log(combine2(1, 2, 'as-text'));
// Function return value types and void in Typescript
// Difference between Void and Undefined type
function add3(num1, num2) {
    return num1 + num2;
}
function printResult(value) {
    console.log('Result', value);
}
printResult(add3(9, 9));
console.log(printResult(add3(9, 9)));
// Assign functions as Types to a variable with argument types
//  and return types in Typescript
// let combineValues: Function
let combineValues;
combineValues = add3;
console.log(combineValues(1, 9));
// Unknown type and Never type in ts
let userInput;
let userName;
userInput = 'Leela';
function generateError(message, code) {
    // throw { message, code }
}
generateError('Invalid Page', 500);
//# sourceMappingURL=main.js.map