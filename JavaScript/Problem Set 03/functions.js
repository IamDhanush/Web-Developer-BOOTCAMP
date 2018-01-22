/*Write a function that checks whether number is even*/
function isEven(number){
	if (number%2 === 0) {
		return true;
	}
		return false;
}

/*Factorial*/
function factorial(number){
	if(number===1 || number===0){
		return 1;
	}
	else{
		return number*factorial(number-1);
	}
}

/*kebabToSnake*/
function KebabToSnake(string){
	return	string.replace("-","_");
}