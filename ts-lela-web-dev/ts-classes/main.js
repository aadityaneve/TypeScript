"use strict";
class Department {
    constructor(name) {
        this.name = name;
    }
    describe() {
        console.log("Department is: ", this.name);
    }
}
let department = new Department("Accounting");
// console.log(department)
department.describe();
let departmentCopy = { name: 'Leela', describe: department.describe };
departmentCopy.describe();
