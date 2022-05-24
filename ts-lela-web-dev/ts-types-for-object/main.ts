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