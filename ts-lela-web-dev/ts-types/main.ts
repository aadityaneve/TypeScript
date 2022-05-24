/* number => javascript, typescript

1, 1,5, -19

string => javascript and typescript => 'HI', 'Hi', `hi`

Boolean => javascript and typescript 

Object => javascript and typescript

Arrays => javascript and typescript

touple => only in typescript

Enums => only in typescript


 */


function add(number1: number, number2: number) {
    return (number1 + number2)
}

let n1: number
n1 = 7
let n2 = 4
let result = add(n1, n2)
console.log(result)


let str: any; // any by default
str = 'Aditya'
console.log(str)

let bool: boolean;
bool = false;
console.log(bool)