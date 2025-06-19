let firstNumber;
let secondNumber;
let operator = "";

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
const btnAc = document.getElementById("btn_ac");

// Others
const textTop = document.getElementById("topText");
const textBottom = document.getElementById("rightSide");
const textOperator = document.getElementById("leftSide");

// Events
btn1.addEventListener("click", function () {
	populateBottomText(1);
});
btn2.addEventListener("click", function () {
	populateBottomText(2);
});
btn3.addEventListener("click", function () {
	populateBottomText(3);
});
btn4.addEventListener("click", function () {
	populateBottomText(4);
});
btn5.addEventListener("click", function () {
	populateBottomText(5);
});
btn6.addEventListener("click", function () {
	populateBottomText(6);
});
btn7.addEventListener("click", function () {
	populateBottomText(7);
});
btn8.addEventListener("click", function () {
	populateBottomText(8);
});
btn9.addEventListener("click", function () {
	populateBottomText(9);
});
btn0.addEventListener("click", function () {
	populateBottomText(0);
});
btnPoint.addEventListener("click", function () {
	populateBottomText(".");
});

btnAc.addEventListener("click", function () {
	firstNumber = "";
	secondNumber = "";
	operator = "";
	clearTopText();
	clearOperatorText();
	clearBottomText();
});

btnAdd.addEventListener("click", function () {
	if (operator == "") {
		operator = "add";
		textOperator.textContent = "+";
		commitFirstNumber(textBottom.textContent);
		populateTopText(firstNumber);
	} else {
		operator = "add";
		textOperator.textContent = "+";
	}
});

btnSubtract.addEventListener("click", function () {
	if (operator == "") {
		operator = "subtract";
		textOperator.textContent = "-";
		commitFirstNumber(textBottom.textContent);
		populateTopText(firstNumber);
	} else {
		operator = "subtract";
		textOperator.textContent = "-";
	}
});

btnMultiply.addEventListener("click", function () {
	if (operator == "") {
		operator = "multiply";
		textOperator.textContent = "x";
		commitFirstNumber(textBottom.textContent);
		populateTopText(firstNumber);
	} else {
		operator = "multiply";
		textOperator.textContent = "x";
	}
});

btnDivide.addEventListener("click", function () {
	if (operator == "") {
		operator = "divide";
		textOperator.textContent = "/";
		commitFirstNumber(textBottom.textContent);
		populateTopText(firstNumber);
	} else {
		operator = "divide";
		textOperator.textContent = "/";
	}
});

btnEquals.addEventListener("click", function () {
	commitSecondNumber(textBottom.textContent);
	clearTopText();
	clearOperatorText();
	clearBottomText();
	populateBottomText(operate(firstNumber, secondNumber, operator));
	firstNumber = "";
	secondNumber = "";
	operator = "";
});

clearTopText();
clearOperatorText();
clearBottomText();

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

function commitFirstNumber(string) {
	firstNumber = parseFloat(string);
	clearBottomText();
}
function commitSecondNumber(string) {
	secondNumber = parseFloat(string);
}

function clearBottomText() {
	textBottom.textContent = "";
}
function clearTopText() {
	textTop.textContent = "";
}

function clearOperatorText() {
	textOperator.textContent = "";
}
function populateBottomText(number) {
	textBottom.textContent = textBottom.textContent + number;
}

function populateTopText(number) {
	textTop.textContent = number;
}
