var Employee = /** @class */ (function () {
    function Employee(name) {
        this.employeeName = name;
    }
    Employee.prototype.greet = function () {
        console.log("Good Morning: ".concat(this.employeeName));
    };
    return Employee;
}());
var emp1 = new Employee('Jack');
emp1.greet();
