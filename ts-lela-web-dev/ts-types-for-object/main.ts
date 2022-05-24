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