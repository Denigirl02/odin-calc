let firstNumber;
let secondNumber;
let operator;
let screenTop = "";
let screenBottom = "";
let screenOperator = "";

// Buttons
const btn1 = document.getElementById("btn_1");
const btn2 = document.getElementById("btn_2");
const btn3 = document.getElementById("btn_3");
const btn4 = document.getElementById("btn_4");
const btn5 = document.getElementById("btn_5");
const btn6 = document.getElementById("btn_6");
const btn7 = document.getElementById("btn_7");
const btn8 = document.getElementById("btn_8");
const btn9 = document.getElementById("btn_9");
const btn0 = document.getElementById("btn_0");
const btnPoint = document.getElementById("btn_point");
const btnAdd = document.getElementById("btn_add");
const btnSubtract = document.getElementById("btn_subtract");
const btnMultiply = document.getElementById("btn_multiply");
const btnDivide = document.getElementById("btn_divide");
const btnEquals = document.getElementById("btn_equals");
const btnDelete = document.getElementById("btn_delete");
const btnAC = document.getElementById("btn_ac");

// Others
const textTop = document.getElementById("topText");
const textBottom = document.getElementById("rightSide");
const textOperator = document.getElementById("leftSide");

btn_1.addEventListener("click", function () {
	populateBottomText(1);
});

// FUNCTIONS
function numberAdd(a, b) {
	const result = a + b;
	return result;
}

function numberSubtract(a, b) {
	const result = a - b;
	return result;
}

function numberMultiply(a, b) {
	const result = a * b;
	return result;
}

function numberDivide(a, b) {
	const result = a / b;
	return result;
}

function operate(firstNumber, secondNumber, operator) {
	let result;
	switch (operator) {
		case "add":
			result = numberAdd(firstNumber, secondNumber);
			break;
		case "subtract":
			result = numberSubtract(firstNumber, secondNumber);
			break;
		case "multiply":
			result = numberMultiply(firstNumber, secondNumber);
			break;
		case "divide":
			result = numberDivide(firstNumber, secondNumber);
		default:
			break;
	}
	return result;
}
function clearBottomText() {
	textBottom.textContent = "";
}
function populateBottomText(number) {
	textBottom.textContent = textBottom.textContent + number;
}
