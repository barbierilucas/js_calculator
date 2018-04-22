document.getElementById('calculate-button').onclick = function() {
	// Collects and stores values in variables
	let elem1 = document.getElementById('elem-1');
	let elem2 = document.getElementById('elem-2');
	let val1 = parseFloat(elem1.value);
	let val2 = parseFloat(elem2.value);
	let choice = document.querySelector('input[name="operation"]:checked');
	let oper = choice.value;

	// Calls getResult and returns the result for the given numbers
	let operationResult = getResult(val1, val2, oper);
	let resultElement = document.getElementById('result');
	resultElement.innerHTML = operationResult;

	// Displays error message if the user is trying to divide a number by zero
	if (oper === "/" && val2 === 0 || oper === "%" && val2 === 0) {
		resultElement.innerHTML = "Não é possível dividir por zero"; 
	}

	// Displays error message if one or both fields are not filled
	if (isNaN(val1) && isNaN(val2) === true) {
		resultElement.innerHTML = "Insira dois números";
		elem1.style.backgroundColor = '#f1c40f';
		elem2.style.backgroundColor = '#f1c40f';
		elem1.focus();
	} else if (isNaN(val1) === false && isNaN(val2) === true) {
		resultElement.innerHTML = "Insira dois números";
		elem2.style.backgroundColor = '#f1c40f';
		elem2.focus();
	} else if (isNaN(val1) === true && isNaN(val2) === false) {
		resultElement.innerHTML = "Insira dois números";
		elem1.style.backgroundColor = '#f1c40f';
		elem1.focus();
	} else if (isNaN(operationResult) === false) {
		elem1.style.backgroundColor = 'white';
		elem2.style.backgroundColor = 'white';
	}
}

// Returns the result of a binary operation, given the operation symbol
function getResult(val1, val2, oper) {
	if (oper === "+") {
		return val1 + val2;
	} else if (oper === "-") {
		return val1 - val2;
	} else if (oper === "*") {
		return val1 * val2;
	} else if (oper === "/") {
		return val1 / val2;
	} else if (oper === "**") {
		return val1 ** val2;
	} else if (oper === "%") {
		return val1 % val2;
	}
}