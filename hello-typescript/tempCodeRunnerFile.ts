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