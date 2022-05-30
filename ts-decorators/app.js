var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function CarDecorator(constructor) {
    constructor.prototype.date = new Date();
    constructor.prototype.giveMeDate = function () {
        return this.date;
    };
}
// function OtherDecorator(constructor: Function) {
//     constructor.prototype.other = "Other Value"
// }
function OtherDecorator(name) {
    if (name === 'Aditya') {
        return function (constructor) {
            constructor.prototype.other = 'Other Value';
        };
    }
    else {
        return null;
    }
}
var Car = /** @class */ (function () {
    // date: Date
    function Car(brand) {
        this.brand = brand;
    }
    Car = __decorate([
        OtherDecorator('Aditya'),
        CarDecorator
    ], Car);
    return Car;
}());
var Vehicle = /** @class */ (function () {
    function Vehicle() {
    }
    Vehicle = __decorate([
        CarDecorator
    ], Vehicle);
    return Vehicle;
}());
var vehicle = new Vehicle();
// console.log('Vehicle Date: ', (<any>vehicle).giveMeDate())
var car = new Car('Ford');
console.log(car.brand);
// console.log('Car Date: ', (<any>car).date)
// console.log('Car Date Method: ', (<any>car).giveMeDate())
console.log(car.other);
