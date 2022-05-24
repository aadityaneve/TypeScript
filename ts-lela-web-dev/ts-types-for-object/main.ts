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
}

let favorites1: any[]
favorites1 = ['animals', 1]

let favorites2: string[]
favorites2 = ['animals']

let favorites3: object[]
favorites3 = [{ name: 'adsfs' }]


for (let hobby of person.hobbies) {
    console.log(hobby.toUpperCase())
}

// Tuple

let person1: {
    name: string,
    age: number,
    hobbies: string[],
    role: [number, string]
} = {
    name: 'Leela',
    age: 99,
    hobbies: ['sports', 'cooking'],
    role: [2, 'author']
}

person1.role.push('admin')
console.log(person1)



let employee: [
    number,
    string
] = [5, 'asdfds']

type Emp = [
    number,
    string
]

type Obj = {
    name: string,
    age: number,
}

let emp: Emp
emp = [22, 'adsfasd']
console.log(emp)





// ENUMS

enum ROLES {
    ADMIN,
    AUTHOR,
    GUEST = 'GUEST',
    UNKNOWN = 99
}

let person2 = {
    name: 'Leela',
    age: 333,
    hobbies: ['sports', 'cooking'],
    role: ROLES.ADMIN
}

if (person2.role === ROLES.ADMIN) {
    console.log('User is Admin')
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

function combine(num1: number | string | boolean, num2: number | string) {
    if (typeof num1 === 'number' && typeof num2 === 'number') return num1 + num2
    else return num1.toString() + num2.toString()
}

let ans1 = combine(1, 'Aditya');
console.log(ans1)


// Literal Type

enum RESULT_TYPES {
    AS_NUMBER = 'as-number',
    AS_TEXT = 'as-text'
}

function combine2(num1: number | string | boolean, num2: number | string, resultType: 'as-number' | 'as-text') {
    let result;
    if (typeof num1 === 'number' && typeof num2 === 'number') result = num1 + num2
    else result = num1.toString() + num2.toString()

    if (resultType === RESULT_TYPES.AS_NUMBER) return +result
    else return result.toString()
}

console.log(combine2(1, 2, 'as-number'))
console.log(combine2(1, 2, 'as-text'))



// Function return value types and void in Typescript
// Difference between Void and Undefined type
function add3(num1: number, num2: number): number {
    return num1 + num2
}

function printResult(value: number): void {
    console.log('Result', value)
}
printResult(add3(9, 9))
console.log(printResult(add3(9, 9)))


// Assign functions as Types to a variable with argument types
//  and return types in Typescript
// let combineValues: Function
let combineValues: (a: number, b: number) => number
combineValues = add3
console.log(combineValues(1, 9))


// Unknown type and Never type in ts
let userInput: unknown
let userName: string
userInput = 'Leela'


function generateError(message: string, code: number): void {
    throw { message, code }
}

generateError('Invalid Page', 500)