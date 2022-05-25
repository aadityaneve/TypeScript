class Department {
    name: string

    constructor(name: string) {
        this.name = name
    }

    describe(this: Department) {
        console.log("Department is: ", this.name)
    }
}

let department = new Department("Accounting")
// console.log(department)

department.describe()

let departmentCopy = { name: 'Leela', describe: department.describe }
departmentCopy.describe()