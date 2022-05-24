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
    hobbies: ['sports', 'cooking']
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