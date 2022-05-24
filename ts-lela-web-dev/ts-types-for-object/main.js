/* let person: {
    name: string,
    age: number
} = {
    name: 'Leela',
    age: 99
}

console.log(person.name) */
var person = {
    name: 'Leela',
    age: 99,
    hobbies: ['sports', 'cooking']
};
var favorites1;
favorites1 = ['animals', 1];
var favorites2;
favorites2 = ['animals'];
var favorites3;
favorites3 = [{ name: 'adsfs' }];
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
}
var person1 = {
    name: 'Leela',
    age: 99,
    hobbies: ['sports', 'cooking'],
    role: [2, 'author']
};
person1.role.push('admin');
console.log(person1);
var employee = [5, 'asdfds'];
var emp;
emp = [22, 'adsfasd'];
console.log(emp);
