var secretNumber = 7;
var number = prompt("Guess the Number??");
if(Number(number)==secretNumber){
	alert("You guessed it Right!! It's 7.");
}
else if(Number(number)>secretNumber){
	alert("Too High!! Number is lower than what you've entered.");
}
else{
	alert("Too Low!! Number is Higher than what you've entered");
}