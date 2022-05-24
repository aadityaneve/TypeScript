console.clear()

console.log("hello ts")

let input1 = document.querySelector('#input1') as HTMLInputElement
let input2 = document.querySelector('#input2') as HTMLInputElement
let button = document.querySelector('#button') as HTMLInputElement

const add = (number1: number, number2: number) => {
    return number1 + number2
}

button.addEventListener('click', () => {
    console.log(add(+input1.value, +input2.value))
})