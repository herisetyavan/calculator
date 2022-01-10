const calculatorScreen = document.querySelector('.calculator-screen')

const updateScreen = (value) => {
	if(calculatorScreen.value == 0){
		calculatorScreen.value = value
	}
	else{
		calculatorScreen.value += value
	}
}


// number
const numbers = document.querySelectorAll(".number")
numbers.forEach((number) => {
	number.addEventListener("click", (event) => {
		let nomor = parseInt(event.target.value)
		updateScreen(nomor)
	})
})
document.addEventListener("keypress", function(event) {
	let num = ""
	event.preventDefault();
	if(event.keyCode == 48) {
		num = String.fromCharCode(event.keyCode);
		updateScreen(parseInt(num))
	}
	else if(event.keyCode == 49){
		num = String.fromCharCode(event.keyCode);
		updateScreen(parseInt(num))
	}
	else if(event.keyCode == 50){
		num = String.fromCharCode(event.keyCode);
		updateScreen(parseInt(num))
	}
	else if(event.keyCode == 51){
		num = String.fromCharCode(event.keyCode);
		updateScreen(parseInt(num))
	}
	else if(event.keyCode == 52){
		num = String.fromCharCode(event.keyCode);
		updateScreen(parseInt(num))
	}
	else if(event.keyCode == 53){
		num = String.fromCharCode(event.keyCode);
		updateScreen(parseInt(num))
	}
	else if(event.keyCode == 54){
		num = String.fromCharCode(event.keyCode);
		updateScreen(parseInt(num))
	}
	else if(event.keyCode == 55){
		num = String.fromCharCode(event.keyCode);
		updateScreen(parseInt(num))
	}
	else if(event.keyCode == 56){
		num = String.fromCharCode(event.keyCode);
		updateScreen(parseInt(num))
	}
	else if(event.keyCode == 57){
		num = String.fromCharCode(event.keyCode);
		updateScreen(parseInt(num))
	}
	else{

	}
});


//operator
const operators = document.querySelectorAll(".operator")
operators.forEach((operator) => {
	operator.addEventListener("click", (event) => {
		let simbolOperator = event.target.value
		let x = calculatorScreen.value

		if(calculatorScreen.value != 0){
			if(!(x.slice(-1) === ('+' || '-' || '*' || '/' || '%') )){
				updateScreen(simbolOperator)
			}
		}
	})
})


//equal
const equalSign = document.querySelector('.equal-sign')
equalSign.addEventListener('click', () => {
	let hasil = calculate()
	if(!(calculatorScreen.value == 0)){
		calculatorScreen.value = hasil
	}
})
const calculate = () => {
	return eval(calculatorScreen.value)
}


//clear
const clearBtn = document.querySelector('.all-clear')
clearBtn.addEventListener('click', () => {
	calculatorScreen.value = parseInt(0)
})

const clearBtnsingle = document.querySelector('.clear-single')
clearBtnsingle.addEventListener('click', () => {
	let str = calculatorScreen.value
	let hapus = str.slice(0,-1)
	if(!(str == 0 || str === "")){
		if(str.length == 1){
			calculatorScreen.value = parseInt(0)
		}
		else{
			calculatorScreen.value = parseInt(hapus)
		}
	}
})


//decimal
const decimal = document.querySelector('.decimal')
decimal.addEventListener('click', (event) => {
	let titik = event.target.value
	let layar = calculatorScreen.value
	let x = layar.split('+').join(',').split('-').join(',').split('*').join(',').split('/').join(',').split('%')
	let y = x[0].split(',')

	if(!(y[y.length -1].includes('.')) && calculatorScreen.value != 0) {
		updateScreen(titik)
	}
})
gfhfg