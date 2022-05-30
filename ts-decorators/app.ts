
function CarDecorator(constructor: Function) {
    constructor.prototype.date = new Date()
    constructor.prototype.giveMeDate = function () {
        return this.date
    }
}

// function OtherDecorator(constructor: Function) {
//     constructor.prototype.other = "Other Value"
// }

function OtherDecorator(name: string) {
    if (name === 'Aditya') {
        return function (constructor: Function) {
            constructor.prototype.other = 'Other Value'
        }
    } else {
        return null
    }
}

@OtherDecorator('Aditya')
@CarDecorator
class Car {

    brand: string
    // date: Date

    constructor(brand: string) {
        this.brand = brand
    }
}

@CarDecorator
class Vehicle { }

const vehicle = new Vehicle()
// console.log('Vehicle Date: ', (<any>vehicle).giveMeDate())

const car = new Car('Ford')
console.log(car.brand)
// console.log('Car Date: ', (<any>car).date)
// console.log('Car Date Method: ', (<any>car).giveMeDate())
console.log((<any>car).other)