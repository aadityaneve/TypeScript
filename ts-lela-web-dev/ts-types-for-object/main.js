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
