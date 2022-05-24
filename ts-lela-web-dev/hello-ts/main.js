console.clear();
console.log("hello ts");
var input1 = document.querySelector('#input1');
var input2 = document.querySelector('#input2');
var button = document.querySelector('#button');
var add = function (number1, number2) {
    return number1 + number2;
};
button.addEventListener('click', function () {
    console.log(add(+input1.value, +input2.value));
});
