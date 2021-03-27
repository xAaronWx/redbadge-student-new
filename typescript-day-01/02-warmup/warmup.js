var input1 = document.getElementById("number1");
var input2 = document.getElementById("number2");
var button = document.getElementById("btn");
button.addEventListener("click", function () {
    console.log(addNumbers(Number(input1.value), Number(input2.value)));
});
function addNumbers(num1, num2) {
    return Number(num1) + Number(num2);
}
