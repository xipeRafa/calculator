window.onload = function() {
//declare letiables
let number1 = 0;
let screen_number = 0;

//displays the number
function render() {id("screen_number").getElementsByTagName("p")[0].innerHTML = screen_number;}
render();


//sets up event listeners for all the numbers.
for (let i = 0; i < 10; i++) {
id(i).addEventListener("click", function() {	
	let number = this.innerHTML;
	write_number(number);
});
} 
function write_number(number) {
	//deja la pantalla lista despues de elejir un operador
	if (screen_number == 0) {
		screen_number = number;
	}
	else {
		screen_number + number;	
	}
	render();
}

function setOperator(oper) {
	//el operador se mete en el operador
	operator = oper;
	//el numero en screen se mete en number1
	number1 = screen_number;
	//deja la pantalla lista despues de elejir un operador
	screen_number = 0;	
}

//operator functions
let plus = function(num1, num2) {
	result = parseInt(num1) + parseInt(num2);
	return result;
}
let minus = function(num1, num2) {
	result = parseInt(num1) - parseInt(num2);
	return result;
}
let por = function(num1, num2) {
	result = parseInt(num1) * parseInt(num2);
	return result;
}
let divide = function(num1, num2) {
	result = parseInt(num1) / parseInt(num2);
	return result;
}


//clears screen if C is pressed
id("clear").addEventListener("click", function() {
	screen_number = 0;
	render();
});

//adds, subtracts, multiplies, or divides values when 
id("plus").addEventListener("click", function() {
 	setOperator(plus);
});
 id("minus").addEventListener("click", function() {
 	setOperator(minus);
});
 id("por").addEventListener("click", function() {
 	setOperator(por);
});
 id("divide").addEventListener("click", function() {
 	setOperator(divide);
});


id("equals").addEventListener("click", function(){
	screen_number = operator(number1, screen_number);
	render();
});

}