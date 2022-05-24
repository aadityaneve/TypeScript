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
// Tuple
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
// ENUMS
var ROLES;
(function (ROLES) {
    ROLES[ROLES["ADMIN"] = 0] = "ADMIN";
    ROLES[ROLES["AUTHOR"] = 1] = "AUTHOR";
    ROLES["GUEST"] = "GUEST";
    ROLES[ROLES["UNKNOWN"] = 99] = "UNKNOWN";
})(ROLES || (ROLES = {}));
var person2 = {
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
function combine(num1, num2) {
    if (typeof num1 === 'number' && typeof num2 === 'number')
        return num1 + num2;
    else
        return num1.toString() + num2.toString();
}
var ans1 = combine(1, 'Aditya');
console.log(ans1);
